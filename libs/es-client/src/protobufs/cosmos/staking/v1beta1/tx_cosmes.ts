// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file cosmos/staking/v1beta1/tx.proto (package cosmos.staking.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgCreateValidator, MsgCreateValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgEditValidator, MsgEditValidatorResponse, MsgUndelegate, MsgUndelegateResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "cosmos.staking.v1beta1.Msg";

/**
 * CreateValidator defines a method for creating a new validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.CreateValidator
 */
export const MsgCreateValidatorService = {
  typeName: TYPE_NAME,
  method: "CreateValidator",
  Request: MsgCreateValidator,
  Response: MsgCreateValidatorResponse,
} as const;

/**
 * EditValidator defines a method for editing an existing validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.EditValidator
 */
export const MsgEditValidatorService = {
  typeName: TYPE_NAME,
  method: "EditValidator",
  Request: MsgEditValidator,
  Response: MsgEditValidatorResponse,
} as const;

/**
 * Delegate defines a method for performing a delegation of coins
 * from a delegator to a validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.Delegate
 */
export const MsgDelegateService = {
  typeName: TYPE_NAME,
  method: "Delegate",
  Request: MsgDelegate,
  Response: MsgDelegateResponse,
} as const;

/**
 * BeginRedelegate defines a method for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.BeginRedelegate
 */
export const MsgBeginRedelegateService = {
  typeName: TYPE_NAME,
  method: "BeginRedelegate",
  Request: MsgBeginRedelegate,
  Response: MsgBeginRedelegateResponse,
} as const;

/**
 * Undelegate defines a method for performing an undelegation from a
 * delegate and a validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.Undelegate
 */
export const MsgUndelegateService = {
  typeName: TYPE_NAME,
  method: "Undelegate",
  Request: MsgUndelegate,
  Response: MsgUndelegateResponse,
} as const;

/**
 * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
 * and delegate back to previous validator.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.CancelUnbondingDelegation
 */
export const MsgCancelUnbondingDelegationService = {
  typeName: TYPE_NAME,
  method: "CancelUnbondingDelegation",
  Request: MsgCancelUnbondingDelegation,
  Response: MsgCancelUnbondingDelegationResponse,
} as const;

/**
 * UpdateParams defines an operation for updating the x/staking module
 * parameters.
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;
