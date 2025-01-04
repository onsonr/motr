// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/concentratedliquidity/poolmodel/concentrated/v1beta1/tx.proto (package osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * ===================== MsgCreateConcentratedPool
 *
 * @generated from message osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool
 */
export class MsgCreateConcentratedPool extends Message<MsgCreateConcentratedPool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string denom0 = 2;
   */
  denom0 = "";

  /**
   * @generated from field: string denom1 = 3;
   */
  denom1 = "";

  /**
   * @generated from field: uint64 tick_spacing = 4;
   */
  tickSpacing = protoInt64.zero;

  /**
   * @generated from field: string spread_factor = 5;
   */
  spreadFactor = "";

  constructor(data?: PartialMessage<MsgCreateConcentratedPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "denom1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tick_spacing", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "spread_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateConcentratedPool {
    return new MsgCreateConcentratedPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateConcentratedPool {
    return new MsgCreateConcentratedPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateConcentratedPool {
    return new MsgCreateConcentratedPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateConcentratedPool | PlainMessage<MsgCreateConcentratedPool> | undefined, b: MsgCreateConcentratedPool | PlainMessage<MsgCreateConcentratedPool> | undefined): boolean {
    return proto3.util.equals(MsgCreateConcentratedPool, a, b);
  }
}

/**
 * Returns a unique poolID to identify the pool with.
 *
 * @generated from message osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse
 */
export class MsgCreateConcentratedPoolResponse extends Message<MsgCreateConcentratedPoolResponse> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreateConcentratedPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateConcentratedPoolResponse {
    return new MsgCreateConcentratedPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateConcentratedPoolResponse {
    return new MsgCreateConcentratedPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateConcentratedPoolResponse {
    return new MsgCreateConcentratedPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateConcentratedPoolResponse | PlainMessage<MsgCreateConcentratedPoolResponse> | undefined, b: MsgCreateConcentratedPoolResponse | PlainMessage<MsgCreateConcentratedPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateConcentratedPoolResponse, a, b);
  }
}

