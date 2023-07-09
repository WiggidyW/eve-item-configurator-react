// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "item_configurator.proto" (package "item_configurator_proto", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ItemConfigurator } from "./item_configurator";
import type { BuybackContractsRep } from "./item_configurator";
import type { BuybackContractsReq } from "./item_configurator";
import type { DelCharactersRep } from "./item_configurator";
import type { DelCharactersReq } from "./item_configurator";
import type { AddCharactersRep } from "./item_configurator";
import type { AddCharactersReq } from "./item_configurator";
import type { ListCharactersRep } from "./item_configurator";
import type { ListCharactersReq } from "./item_configurator";
import type { ListRep } from "./item_configurator";
import type { ListReq } from "./item_configurator";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { UpdateRep } from "./item_configurator";
import type { UpdateReq } from "./item_configurator";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service item_configurator_proto.ItemConfigurator
 */
export interface IItemConfiguratorClient {
    /**
     * @generated from protobuf rpc: Update(item_configurator_proto.UpdateReq) returns (item_configurator_proto.UpdateRep);
     */
    update(input: UpdateReq, options?: RpcOptions): UnaryCall<UpdateReq, UpdateRep>;
    /**
     * @generated from protobuf rpc: List(item_configurator_proto.ListReq) returns (item_configurator_proto.ListRep);
     */
    list(input: ListReq, options?: RpcOptions): UnaryCall<ListReq, ListRep>;
    /**
     * @generated from protobuf rpc: ListCharacters(item_configurator_proto.ListCharactersReq) returns (item_configurator_proto.ListCharactersRep);
     */
    listCharacters(input: ListCharactersReq, options?: RpcOptions): UnaryCall<ListCharactersReq, ListCharactersRep>;
    /**
     * @generated from protobuf rpc: AddCharacters(item_configurator_proto.AddCharactersReq) returns (item_configurator_proto.AddCharactersRep);
     */
    addCharacters(input: AddCharactersReq, options?: RpcOptions): UnaryCall<AddCharactersReq, AddCharactersRep>;
    /**
     * @generated from protobuf rpc: DelCharacters(item_configurator_proto.DelCharactersReq) returns (item_configurator_proto.DelCharactersRep);
     */
    delCharacters(input: DelCharactersReq, options?: RpcOptions): UnaryCall<DelCharactersReq, DelCharactersRep>;
    /**
     * @generated from protobuf rpc: BuybackContracts(item_configurator_proto.BuybackContractsReq) returns (item_configurator_proto.BuybackContractsRep);
     */
    buybackContracts(input: BuybackContractsReq, options?: RpcOptions): UnaryCall<BuybackContractsReq, BuybackContractsRep>;
}
/**
 * @generated from protobuf service item_configurator_proto.ItemConfigurator
 */
export class ItemConfiguratorClient implements IItemConfiguratorClient, ServiceInfo {
    typeName = ItemConfigurator.typeName;
    methods = ItemConfigurator.methods;
    options = ItemConfigurator.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Update(item_configurator_proto.UpdateReq) returns (item_configurator_proto.UpdateRep);
     */
    update(input: UpdateReq, options?: RpcOptions): UnaryCall<UpdateReq, UpdateRep> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateReq, UpdateRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: List(item_configurator_proto.ListReq) returns (item_configurator_proto.ListRep);
     */
    list(input: ListReq, options?: RpcOptions): UnaryCall<ListReq, ListRep> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListReq, ListRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListCharacters(item_configurator_proto.ListCharactersReq) returns (item_configurator_proto.ListCharactersRep);
     */
    listCharacters(input: ListCharactersReq, options?: RpcOptions): UnaryCall<ListCharactersReq, ListCharactersRep> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListCharactersReq, ListCharactersRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AddCharacters(item_configurator_proto.AddCharactersReq) returns (item_configurator_proto.AddCharactersRep);
     */
    addCharacters(input: AddCharactersReq, options?: RpcOptions): UnaryCall<AddCharactersReq, AddCharactersRep> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<AddCharactersReq, AddCharactersRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DelCharacters(item_configurator_proto.DelCharactersReq) returns (item_configurator_proto.DelCharactersRep);
     */
    delCharacters(input: DelCharactersReq, options?: RpcOptions): UnaryCall<DelCharactersReq, DelCharactersRep> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<DelCharactersReq, DelCharactersRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: BuybackContracts(item_configurator_proto.BuybackContractsReq) returns (item_configurator_proto.BuybackContractsRep);
     */
    buybackContracts(input: BuybackContractsReq, options?: RpcOptions): UnaryCall<BuybackContractsReq, BuybackContractsRep> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<BuybackContractsReq, BuybackContractsRep>("unary", this._transport, method, opt, input);
    }
}
