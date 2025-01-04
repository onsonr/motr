// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file dwn/v1/tx.proto (package dwn.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  MsgInitialize,
  MsgInitializeResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from "./tx_pb.js";

const TYPE_NAME = "dwn.v1.Msg";

/**
 * UpdateParams defines a governance operation for updating the parameters.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc dwn.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * Initialize spawns a new Vault
 *
 * @generated from rpc dwn.v1.Msg.Initialize
 */
export const MsgInitializeService = {
  typeName: TYPE_NAME,
  method: "Initialize",
  Request: MsgInitialize,
  Response: MsgInitializeResponse,
} as const;
