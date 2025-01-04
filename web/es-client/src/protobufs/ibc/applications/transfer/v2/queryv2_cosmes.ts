// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v2/queryv2.proto (package ibc.applications.transfer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryDenomRequest, QueryDenomResponse, QueryDenomsRequest, QueryDenomsResponse } from "./queryv2_pb.js";

const TYPE_NAME = "ibc.applications.transfer.v2.QueryV2";

/**
 * Denoms queries all denominations
 *
 * @generated from rpc ibc.applications.transfer.v2.QueryV2.Denoms
 */
export const QueryV2DenomsService = {
  typeName: TYPE_NAME,
  method: "Denoms",
  Request: QueryDenomsRequest,
  Response: QueryDenomsResponse,
} as const;

/**
 * Denom queries a denomination
 *
 * @generated from rpc ibc.applications.transfer.v2.QueryV2.Denom
 */
export const QueryV2DenomService = {
  typeName: TYPE_NAME,
  method: "Denom",
  Request: QueryDenomRequest,
  Response: QueryDenomResponse,
} as const;

