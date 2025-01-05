// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/lightclients/tendermint/v1/tendermint.proto (package ibc.lightclients.tendermint.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Height } from "../../../core/client/v1/client_pb.js";
import { ProofSpec } from "../../../../cosmos/ics23/v1/proofs_pb.js";
import { MerkleRoot } from "../../../core/commitment/v1/commitment_pb.js";
import { SignedHeader } from "../../../../tendermint/types/types_pb.js";
import { ValidatorSet } from "../../../../tendermint/types/validator_pb.js";

/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 *
 * @generated from message ibc.lightclients.tendermint.v1.ClientState
 */
export class ClientState extends Message<ClientState> {
  /**
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  /**
   * @generated from field: ibc.lightclients.tendermint.v1.Fraction trust_level = 2;
   */
  trustLevel?: Fraction;

  /**
   * duration of the period since the LatestTimestamp during which the
   * submitted headers are valid for upgrade
   *
   * @generated from field: google.protobuf.Duration trusting_period = 3;
   */
  trustingPeriod?: Duration;

  /**
   * duration of the staking unbonding period
   *
   * @generated from field: google.protobuf.Duration unbonding_period = 4;
   */
  unbondingPeriod?: Duration;

  /**
   * defines how much new (untrusted) header's Time can drift into the future.
   *
   * @generated from field: google.protobuf.Duration max_clock_drift = 5;
   */
  maxClockDrift?: Duration;

  /**
   * Block height when the client was frozen due to a misbehaviour
   *
   * @generated from field: ibc.core.client.v1.Height frozen_height = 6;
   */
  frozenHeight?: Height;

  /**
   * Latest height the client was updated to
   *
   * @generated from field: ibc.core.client.v1.Height latest_height = 7;
   */
  latestHeight?: Height;

  /**
   * Proof specifications used in verifying counterparty state
   *
   * @generated from field: repeated cosmos.ics23.v1.ProofSpec proof_specs = 8;
   */
  proofSpecs: ProofSpec[] = [];

  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   *
   * @generated from field: repeated string upgrade_path = 9;
   */
  upgradePath: string[] = [];

  /**
   * allow_update_after_expiry is deprecated
   *
   * @generated from field: bool allow_update_after_expiry = 10 [deprecated = true];
   * @deprecated
   */
  allowUpdateAfterExpiry = false;

  /**
   * allow_update_after_misbehaviour is deprecated
   *
   * @generated from field: bool allow_update_after_misbehaviour = 11 [deprecated = true];
   * @deprecated
   */
  allowUpdateAfterMisbehaviour = false;

  constructor(data?: PartialMessage<ClientState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.tendermint.v1.ClientState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "trust_level", kind: "message", T: Fraction },
    { no: 3, name: "trusting_period", kind: "message", T: Duration },
    { no: 4, name: "unbonding_period", kind: "message", T: Duration },
    { no: 5, name: "max_clock_drift", kind: "message", T: Duration },
    { no: 6, name: "frozen_height", kind: "message", T: Height },
    { no: 7, name: "latest_height", kind: "message", T: Height },
    { no: 8, name: "proof_specs", kind: "message", T: ProofSpec, repeated: true },
    { no: 9, name: "upgrade_path", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "allow_update_after_expiry", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "allow_update_after_misbehaviour", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientState {
    return new ClientState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientState {
    return new ClientState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientState {
    return new ClientState().fromJsonString(jsonString, options);
  }

  static equals(a: ClientState | PlainMessage<ClientState> | undefined, b: ClientState | PlainMessage<ClientState> | undefined): boolean {
    return proto3.util.equals(ClientState, a, b);
  }
}

/**
 * ConsensusState defines the consensus state from Tendermint.
 *
 * @generated from message ibc.lightclients.tendermint.v1.ConsensusState
 */
export class ConsensusState extends Message<ConsensusState> {
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * commitment root (i.e app hash)
   *
   * @generated from field: ibc.core.commitment.v1.MerkleRoot root = 2;
   */
  root?: MerkleRoot;

  /**
   * @generated from field: bytes next_validators_hash = 3;
   */
  nextValidatorsHash = new Uint8Array(0);

  constructor(data?: PartialMessage<ConsensusState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.tendermint.v1.ConsensusState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "root", kind: "message", T: MerkleRoot },
    { no: 3, name: "next_validators_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusState {
    return new ConsensusState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusState {
    return new ConsensusState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusState {
    return new ConsensusState().fromJsonString(jsonString, options);
  }

  static equals(a: ConsensusState | PlainMessage<ConsensusState> | undefined, b: ConsensusState | PlainMessage<ConsensusState> | undefined): boolean {
    return proto3.util.equals(ConsensusState, a, b);
  }
}

/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 *
 * @generated from message ibc.lightclients.tendermint.v1.Misbehaviour
 */
export class Misbehaviour extends Message<Misbehaviour> {
  /**
   * ClientID is deprecated
   *
   * @generated from field: string client_id = 1 [deprecated = true];
   * @deprecated
   */
  clientId = "";

  /**
   * @generated from field: ibc.lightclients.tendermint.v1.Header header_1 = 2;
   */
  header1?: Header;

  /**
   * @generated from field: ibc.lightclients.tendermint.v1.Header header_2 = 3;
   */
  header2?: Header;

  constructor(data?: PartialMessage<Misbehaviour>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.tendermint.v1.Misbehaviour";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "header_1", kind: "message", T: Header },
    { no: 3, name: "header_2", kind: "message", T: Header },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Misbehaviour {
    return new Misbehaviour().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Misbehaviour {
    return new Misbehaviour().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Misbehaviour {
    return new Misbehaviour().fromJsonString(jsonString, options);
  }

  static equals(a: Misbehaviour | PlainMessage<Misbehaviour> | undefined, b: Misbehaviour | PlainMessage<Misbehaviour> | undefined): boolean {
    return proto3.util.equals(Misbehaviour, a, b);
  }
}

/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 *
 * @generated from message ibc.lightclients.tendermint.v1.Header
 */
export class Header extends Message<Header> {
  /**
   * @generated from field: tendermint.types.SignedHeader signed_header = 1;
   */
  signedHeader?: SignedHeader;

  /**
   * @generated from field: tendermint.types.ValidatorSet validator_set = 2;
   */
  validatorSet?: ValidatorSet;

  /**
   * @generated from field: ibc.core.client.v1.Height trusted_height = 3;
   */
  trustedHeight?: Height;

  /**
   * @generated from field: tendermint.types.ValidatorSet trusted_validators = 4;
   */
  trustedValidators?: ValidatorSet;

  constructor(data?: PartialMessage<Header>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.tendermint.v1.Header";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "signed_header", kind: "message", T: SignedHeader },
    { no: 2, name: "validator_set", kind: "message", T: ValidatorSet },
    { no: 3, name: "trusted_height", kind: "message", T: Height },
    { no: 4, name: "trusted_validators", kind: "message", T: ValidatorSet },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Header {
    return new Header().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Header {
    return new Header().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Header {
    return new Header().fromJsonString(jsonString, options);
  }

  static equals(a: Header | PlainMessage<Header> | undefined, b: Header | PlainMessage<Header> | undefined): boolean {
    return proto3.util.equals(Header, a, b);
  }
}

/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 *
 * @generated from message ibc.lightclients.tendermint.v1.Fraction
 */
export class Fraction extends Message<Fraction> {
  /**
   * @generated from field: uint64 numerator = 1;
   */
  numerator = protoInt64.zero;

  /**
   * @generated from field: uint64 denominator = 2;
   */
  denominator = protoInt64.zero;

  constructor(data?: PartialMessage<Fraction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.tendermint.v1.Fraction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "numerator", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "denominator", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fraction {
    return new Fraction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fraction {
    return new Fraction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fraction {
    return new Fraction().fromJsonString(jsonString, options);
  }

  static equals(a: Fraction | PlainMessage<Fraction> | undefined, b: Fraction | PlainMessage<Fraction> | undefined): boolean {
    return proto3.util.equals(Fraction, a, b);
  }
}
