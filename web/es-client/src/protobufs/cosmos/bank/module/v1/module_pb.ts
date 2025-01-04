// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/bank/module/v1/module.proto (package cosmos.bank.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Module is the config object of the bank module.
 *
 * @generated from message cosmos.bank.module.v1.Module
 */
export class Module extends Message<Module> {
  /**
   * blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving
   * funds. If left empty it defaults to the list of account names supplied in the auth module configuration as
   * module_account_permissions
   *
   * @generated from field: repeated string blocked_module_accounts_override = 1;
   */
  blockedModuleAccountsOverride: string[] = [];

  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   *
   * @generated from field: string authority = 2;
   */
  authority = "";

  constructor(data?: PartialMessage<Module>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.bank.module.v1.Module";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "blocked_module_accounts_override", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module {
    return new Module().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJsonString(jsonString, options);
  }

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean {
    return proto3.util.equals(Module, a, b);
  }
}

