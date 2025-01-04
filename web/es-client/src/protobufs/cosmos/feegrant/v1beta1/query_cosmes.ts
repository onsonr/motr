// Since: cosmos-sdk 0.43

// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file cosmos/feegrant/v1beta1/query.proto (package cosmos.feegrant.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse, QueryAllowancesRequest, QueryAllowancesResponse } from "./query_pb.js";

const TYPE_NAME = "cosmos.feegrant.v1beta1.Query";

/**
 * Allowance returns granted allwance to the grantee by the granter.
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Query.Allowance
 */
export const QueryAllowanceService = {
  typeName: TYPE_NAME,
  method: "Allowance",
  Request: QueryAllowanceRequest,
  Response: QueryAllowanceResponse,
} as const;

/**
 * Allowances returns all the grants for the given grantee address.
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Query.Allowances
 */
export const QueryAllowancesService = {
  typeName: TYPE_NAME,
  method: "Allowances",
  Request: QueryAllowancesRequest,
  Response: QueryAllowancesResponse,
} as const;

/**
 * AllowancesByGranter returns all the grants given by an address
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Query.AllowancesByGranter
 */
export const QueryAllowancesByGranterService = {
  typeName: TYPE_NAME,
  method: "AllowancesByGranter",
  Request: QueryAllowancesByGranterRequest,
  Response: QueryAllowancesByGranterResponse,
} as const;

