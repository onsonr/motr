// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/gamm/v2/query.proto (package osmosis.gamm.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.gamm.v2.Query";

/**
 * Deprecated: please use alternate in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v2.Query.SpotPrice
 * @deprecated
 */
export const QuerySpotPriceService = {
  typeName: TYPE_NAME,
  method: "SpotPrice",
  Request: QuerySpotPriceRequest,
  Response: QuerySpotPriceResponse,
} as const;
