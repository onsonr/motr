# `onsonr/motr`

[![GoDoc](https://godoc.org/github.com/onsonr/motr?status.svg)](https://godoc.org/github.com/onsonr/motr)
[![Go Report Card](https://goreportcard.com/badge/github.com/onsonr/motr)](https://goreportcard.com/report/github.com/onsonr/motr)

`onsonr/motr` is the implementation of the Decentralized Web Node for the Sonr Blockchain.

## Install
```bash
go get github.com/onsonr/motr
```

## Usage
```go
package main
import (
	"github.com/onsonr/motr"
)

func main() {
	// Create a new decentralized web node
	node := motr.NewNode()

	// Start the decentralized web node
	node.Start()
}
```

## License
[MIT](LICENSE)  

Copyright (c) 2024, diDAO
