// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file babylon/zoneconcierge/v1/packet.proto (package babylon.zoneconcierge.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { IndexedHeader, ProofFinalizedChainInfo } from "./zoneconcierge_pb.js";
import { BTCHeaderInfo } from "../../btclightclient/v1/btclightclient_pb.js";
import { Epoch } from "../../epoching/v1/epoching_pb.js";
import { RawCheckpoint } from "../../checkpointing/v1/checkpoint_pb.js";
import { SubmissionKey } from "../../btccheckpoint/v1/btccheckpoint_pb.js";

/**
 * ZoneconciergePacketData is the message that defines the IBC packets of
 * ZoneConcierge
 *
 * @generated from message babylon.zoneconcierge.v1.ZoneconciergePacketData
 */
export class ZoneconciergePacketData extends Message<ZoneconciergePacketData> {
  /**
   * packet is the actual message carried in the IBC packet
   *
   * @generated from oneof babylon.zoneconcierge.v1.ZoneconciergePacketData.packet
   */
  packet: {
    /**
     * @generated from field: babylon.zoneconcierge.v1.BTCTimestamp btc_timestamp = 1;
     */
    value: BTCTimestamp;
    case: "btcTimestamp";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ZoneconciergePacketData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.ZoneconciergePacketData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "btc_timestamp", kind: "message", T: BTCTimestamp, oneof: "packet" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZoneconciergePacketData {
    return new ZoneconciergePacketData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZoneconciergePacketData {
    return new ZoneconciergePacketData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZoneconciergePacketData {
    return new ZoneconciergePacketData().fromJsonString(jsonString, options);
  }

  static equals(a: ZoneconciergePacketData | PlainMessage<ZoneconciergePacketData> | undefined, b: ZoneconciergePacketData | PlainMessage<ZoneconciergePacketData> | undefined): boolean {
    return proto3.util.equals(ZoneconciergePacketData, a, b);
  }
}

/**
 * BTCTimestamp is a BTC timestamp that carries information of a BTC-finalised epoch
 * It includes a number of BTC headers, a raw checkpoint, an epoch metadata, and 
 * a CZ header if there exists CZ headers checkpointed to this epoch.
 * Upon a newly finalised epoch in Babylon, Babylon will send a BTC timestamp to each
 * Cosmos zone that has phase-2 integration with Babylon via IBC.
 *
 * @generated from message babylon.zoneconcierge.v1.BTCTimestamp
 */
export class BTCTimestamp extends Message<BTCTimestamp> {
  /**
   * header is the last CZ header in the finalized Babylon epoch
   *
   * @generated from field: babylon.zoneconcierge.v1.IndexedHeader header = 1;
   */
  header?: IndexedHeader;

  /**
   * btc_headers is BTC headers between
   * - the block AFTER the common ancestor of BTC tip at epoch `lastFinalizedEpoch-1` and BTC tip at epoch `lastFinalizedEpoch`
   * - BTC tip at epoch `lastFinalizedEpoch`
   * where `lastFinalizedEpoch` is the last finalised epoch in Babylon
   *
   * @generated from field: repeated babylon.btclightclient.v1.BTCHeaderInfo btc_headers = 2;
   */
  btcHeaders: BTCHeaderInfo[] = [];

  /**
   * epoch_info is the metadata of the sealed epoch
   *
   * @generated from field: babylon.epoching.v1.Epoch epoch_info = 3;
   */
  epochInfo?: Epoch;

  /**
   * raw_checkpoint is the raw checkpoint that seals this epoch
   *
   * @generated from field: babylon.checkpointing.v1.RawCheckpoint raw_checkpoint = 4;
   */
  rawCheckpoint?: RawCheckpoint;

  /**
   * btc_submission_key is position of two BTC txs that include the raw checkpoint of this epoch
   *
   * @generated from field: babylon.btccheckpoint.v1.SubmissionKey btc_submission_key = 5;
   */
  btcSubmissionKey?: SubmissionKey;

  /**
   *
   * Proofs that the header is finalized
   *
   * @generated from field: babylon.zoneconcierge.v1.ProofFinalizedChainInfo proof = 6;
   */
  proof?: ProofFinalizedChainInfo;

  constructor(data?: PartialMessage<BTCTimestamp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.BTCTimestamp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "header", kind: "message", T: IndexedHeader },
    { no: 2, name: "btc_headers", kind: "message", T: BTCHeaderInfo, repeated: true },
    { no: 3, name: "epoch_info", kind: "message", T: Epoch },
    { no: 4, name: "raw_checkpoint", kind: "message", T: RawCheckpoint },
    { no: 5, name: "btc_submission_key", kind: "message", T: SubmissionKey },
    { no: 6, name: "proof", kind: "message", T: ProofFinalizedChainInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BTCTimestamp {
    return new BTCTimestamp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BTCTimestamp {
    return new BTCTimestamp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BTCTimestamp {
    return new BTCTimestamp().fromJsonString(jsonString, options);
  }

  static equals(a: BTCTimestamp | PlainMessage<BTCTimestamp> | undefined, b: BTCTimestamp | PlainMessage<BTCTimestamp> | undefined): boolean {
    return proto3.util.equals(BTCTimestamp, a, b);
  }
}
