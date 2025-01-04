// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file cosmos/store/streaming/abci/grpc.proto (package cosmos.store.streaming.abci, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ListenCommitRequest, ListenCommitResponse, ListenFinalizeBlockRequest, ListenFinalizeBlockResponse } from "./grpc_pb.js";

const TYPE_NAME = "cosmos.store.streaming.abci.ABCIListenerService";

/**
 * ListenFinalizeBlock is the corresponding endpoint for ABCIListener.ListenEndBlock
 *
 * @generated from rpc cosmos.store.streaming.abci.ABCIListenerService.ListenFinalizeBlock
 */
export const ABCIListenerServiceListenFinalizeBlockService = {
  typeName: TYPE_NAME,
  method: "ListenFinalizeBlock",
  Request: ListenFinalizeBlockRequest,
  Response: ListenFinalizeBlockResponse,
} as const;

/**
 * ListenCommit is the corresponding endpoint for ABCIListener.ListenCommit
 *
 * @generated from rpc cosmos.store.streaming.abci.ABCIListenerService.ListenCommit
 */
export const ABCIListenerServiceListenCommitService = {
  typeName: TYPE_NAME,
  method: "ListenCommit",
  Request: ListenCommitRequest,
  Response: ListenCommitResponse,
} as const;

