// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/gamm/poolmodels/balancer/v1beta1/tx.proto (package osmosis.gamm.poolmodels.balancer.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx_pb.js";

const TYPE_NAME = "osmosis.gamm.poolmodels.balancer.v1beta1.Msg";

/**
 * @generated from rpc osmosis.gamm.poolmodels.balancer.v1beta1.Msg.CreateBalancerPool
 */
export const MsgCreateBalancerPoolService = {
  typeName: TYPE_NAME,
  method: "CreateBalancerPool",
  Request: MsgCreateBalancerPool,
  Response: MsgCreateBalancerPoolResponse,
} as const;

