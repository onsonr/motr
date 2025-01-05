// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/transfer.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 *
 * @generated from message ibc.applications.transfer.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   *
   * @generated from field: bool send_enabled = 1;
   */
  sendEnabled = false;

  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   *
   * @generated from field: bool receive_enabled = 2;
   */
  receiveEnabled = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "receive_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * Forwarding defines a list of port ID, channel ID pairs determining the path
 * through which a packet must be forwarded, and an unwind boolean indicating if
 * the coin should be unwinded to its native chain before forwarding.
 *
 * @generated from message ibc.applications.transfer.v1.Forwarding
 */
export class Forwarding extends Message<Forwarding> {
  /**
   * optional unwinding for the token transfered
   *
   * @generated from field: bool unwind = 1;
   */
  unwind = false;

  /**
   * optional intermediate path through which packet will be forwarded
   *
   * @generated from field: repeated ibc.applications.transfer.v1.Hop hops = 2;
   */
  hops: Hop[] = [];

  constructor(data?: PartialMessage<Forwarding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.Forwarding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "unwind", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "hops", kind: "message", T: Hop, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Forwarding {
    return new Forwarding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Forwarding {
    return new Forwarding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Forwarding {
    return new Forwarding().fromJsonString(jsonString, options);
  }

  static equals(a: Forwarding | PlainMessage<Forwarding> | undefined, b: Forwarding | PlainMessage<Forwarding> | undefined): boolean {
    return proto3.util.equals(Forwarding, a, b);
  }
}

/**
 * Hop defines a port ID, channel ID pair specifying where tokens must be forwarded
 * next in a multihop transfer.
 *
 * @generated from message ibc.applications.transfer.v1.Hop
 */
export class Hop extends Message<Hop> {
  /**
   * @generated from field: string port_id = 1;
   */
  portId = "";

  /**
   * @generated from field: string channel_id = 2;
   */
  channelId = "";

  constructor(data?: PartialMessage<Hop>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.Hop";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hop {
    return new Hop().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hop {
    return new Hop().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hop {
    return new Hop().fromJsonString(jsonString, options);
  }

  static equals(a: Hop | PlainMessage<Hop> | undefined, b: Hop | PlainMessage<Hop> | undefined): boolean {
    return proto3.util.equals(Hop, a, b);
  }
}
