// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/twap/v1beta1/query.proto (package osmosis.twap.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse, GeometricTwapRequest, GeometricTwapResponse, GeometricTwapToNowRequest, GeometricTwapToNowResponse, ParamsRequest, ParamsResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.twap.v1beta1.Query";

/**
 * @generated from rpc osmosis.twap.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: ParamsRequest,
  Response: ParamsResponse,
} as const;

/**
 * @generated from rpc osmosis.twap.v1beta1.Query.ArithmeticTwap
 */
export const QueryArithmeticTwapService = {
  typeName: TYPE_NAME,
  method: "ArithmeticTwap",
  Request: ArithmeticTwapRequest,
  Response: ArithmeticTwapResponse,
} as const;

/**
 * @generated from rpc osmosis.twap.v1beta1.Query.ArithmeticTwapToNow
 */
export const QueryArithmeticTwapToNowService = {
  typeName: TYPE_NAME,
  method: "ArithmeticTwapToNow",
  Request: ArithmeticTwapToNowRequest,
  Response: ArithmeticTwapToNowResponse,
} as const;

/**
 * @generated from rpc osmosis.twap.v1beta1.Query.GeometricTwap
 */
export const QueryGeometricTwapService = {
  typeName: TYPE_NAME,
  method: "GeometricTwap",
  Request: GeometricTwapRequest,
  Response: GeometricTwapResponse,
} as const;

/**
 * @generated from rpc osmosis.twap.v1beta1.Query.GeometricTwapToNow
 */
export const QueryGeometricTwapToNowService = {
  typeName: TYPE_NAME,
  method: "GeometricTwapToNow",
  Request: GeometricTwapToNowRequest,
  Response: GeometricTwapToNowResponse,
} as const;

