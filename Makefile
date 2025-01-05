#!/usr/bin/make -f
VERSION := $(shell echo $(shell git describe --tags) | sed 's/^v//')
COMMIT := $(shell git log -1 --format='%H')
BINDIR ?= $(GOPATH)/bin

# for dockerized protobuf tools
DOCKER := $(shell which docker)
HTTPS_GIT := github.com/onsonr/sonr.git

all: test

build: go.sum
	GOOS=js GOARCH=wasm go build -o static/wasm/app.wasm ./cmd/motr/main.go

########################################
### Tools & dependencies
########################################

go-mod-cache: go.sum
	@echo "--> Download go modules to local cache"
	@go mod download

go.sum: go.mod
	@echo "--> Ensure dependencies have not been modified"
	@go mod verify

draw-deps:
	@# requires brew install graphviz or apt-get install graphviz
	go install github.com/RobotsAndPencils/goviz@latest
	@goviz -i ./cmd/sonrd -d 2 | dot -Tpng -o dependency-graph.png

install-deps:
	echo "Installing dependencies"
	@go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest
	@go install github.com/a-h/templ/cmd/templ@latest
	@go install github.com/go-task/task/v3/cmd/task@latest

clean:
	rm -rf .aider*
	rm -rf static
	rm -rf .out
	rm -rf build

distclean: clean
	rm -rf vendor/

########################################
### Testing
########################################

test: test-unit
test-all: test-race test-cover test-system

test-unit:
	@VERSION=$(VERSION) go test -mod=readonly -tags='ledger test_ledger_mock' ./...

test-race:
	@VERSION=$(VERSION) go test -mod=readonly -race -tags='ledger test_ledger_mock' ./...

test-cover:
	@go test -mod=readonly -timeout 30m -race -coverprofile=coverage.txt -covermode=atomic -tags='ledger test_ledger_mock' ./...

benchmark:
	@go test -mod=readonly -bench=. ./...

###############################################################################
###                                     help                                ###
###############################################################################

help:
	@echo "Usage: make <target>"
	@echo ""
	@echo "Available targets:"
	@echo "  proto-gen           : Generate code from proto files"
	@echo "  testnet             : Local devnet with IBC"
	@echo "  sh-testnet          : Shell local devnet"
	@echo "  ictest-basic        : Basic end-to-end test"
	@echo "  ictest-ibc          : IBC end-to-end test"

.PHONY: help

