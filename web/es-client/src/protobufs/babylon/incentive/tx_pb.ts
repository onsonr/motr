// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file babylon/incentive/tx.proto (package babylon.incentive, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./params_pb.js";

/**
 * MsgWithdrawReward defines a message for withdrawing reward of a stakeholder.
 *
 * @generated from message babylon.incentive.MsgWithdrawReward
 */
export class MsgWithdrawReward extends Message<MsgWithdrawReward> {
  /**
   * {submitter, reporter, finality_provider, btc_delegation}
   *
   * @generated from field: string type = 1;
   */
  type = "";

  /**
   * address is the address of the stakeholder in bech32 string
   * signer of this msg has to be this address
   *
   * @generated from field: string address = 2;
   */
  address = "";

  constructor(data?: PartialMessage<MsgWithdrawReward>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.incentive.MsgWithdrawReward";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawReward {
    return new MsgWithdrawReward().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawReward {
    return new MsgWithdrawReward().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawReward {
    return new MsgWithdrawReward().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawReward | PlainMessage<MsgWithdrawReward> | undefined, b: MsgWithdrawReward | PlainMessage<MsgWithdrawReward> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawReward, a, b);
  }
}

/**
 * MsgWithdrawRewardResponse is the response to the MsgWithdrawReward message
 *
 * @generated from message babylon.incentive.MsgWithdrawRewardResponse
 */
export class MsgWithdrawRewardResponse extends Message<MsgWithdrawRewardResponse> {
  /**
   * coins is the withdrawed coins
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<MsgWithdrawRewardResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.incentive.MsgWithdrawRewardResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawRewardResponse {
    return new MsgWithdrawRewardResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawRewardResponse {
    return new MsgWithdrawRewardResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawRewardResponse {
    return new MsgWithdrawRewardResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawRewardResponse | PlainMessage<MsgWithdrawRewardResponse> | undefined, b: MsgWithdrawRewardResponse | PlainMessage<MsgWithdrawRewardResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawRewardResponse, a, b);
  }
}

/**
 * MsgUpdateParams defines a message for updating incentive module parameters.
 *
 * @generated from message babylon.incentive.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet implemented
   * in cosmos-proto
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * params defines the incentive parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: babylon.incentive.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.incentive.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * MsgUpdateParamsResponse is the response to the MsgUpdateParams message.
 *
 * @generated from message babylon.incentive.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.incentive.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}

