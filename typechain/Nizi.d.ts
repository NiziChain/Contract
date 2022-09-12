/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface NiziInterface extends ethers.utils.Interface {
  functions: {
    "checkRight(uint256)": FunctionFragment;
    "deprive(uint256,uint256)": FunctionFragment;
    "getAuthor(uint256)": FunctionFragment;
    "getContentsList(address)": FunctionFragment;
    "getNumberOfContents()": FunctionFragment;
    "getParent(uint256)": FunctionFragment;
    "getRoyalty(uint256)": FunctionFragment;
    "recover(uint256,uint256)": FunctionFragment;
    "registerOriginal(uint256)": FunctionFragment;
    "registerSecondary(uint256)": FunctionFragment;
    "setRoyalty(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkRight",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deprive",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getContentsList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfContents",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getParent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyalty",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recover",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerOriginal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerSecondary",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyalty",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "checkRight", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deprive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAuthor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContentsList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfContents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getParent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoyalty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerOriginal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerSecondary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRoyalty", data: BytesLike): Result;

  events: {
    "RegisterOriginal(address,uint256)": EventFragment;
    "RegisterSecondary(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RegisterOriginal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisterSecondary"): EventFragment;
}

export class Nizi extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NiziInterface;

  functions: {
    checkRight(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "checkRight(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    deprive(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deprive(uint256,uint256)"(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAuthor(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getAuthor(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getContentsList(
      author: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "getContentsList(address)"(
      author: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    getNumberOfContents(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getNumberOfContents()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getParent(
      child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getParent(uint256)"(
      child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getRoyalty(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getRoyalty(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    recover(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "recover(uint256,uint256)"(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    registerOriginal(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerOriginal(uint256)"(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    registerSecondary(
      _parent_id: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "registerSecondary(uint256)"(
      _parent_id: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    setRoyalty(
      _content_id: BigNumberish,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRoyalty(uint256,uint256)"(
      _content_id: BigNumberish,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  checkRight(
    _content_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "checkRight(uint256)"(
    _content_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  deprive(
    _parent_id: BigNumberish,
    _child_id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deprive(uint256,uint256)"(
    _parent_id: BigNumberish,
    _child_id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAuthor(
    _content_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getAuthor(uint256)"(
    _content_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getContentsList(
    author: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getContentsList(address)"(
    author: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getNumberOfContents(overrides?: CallOverrides): Promise<BigNumber>;

  "getNumberOfContents()"(overrides?: CallOverrides): Promise<BigNumber>;

  getParent(
    child_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getParent(uint256)"(
    child_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoyalty(
    _content_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRoyalty(uint256)"(
    _content_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  recover(
    _parent_id: BigNumberish,
    _child_id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "recover(uint256,uint256)"(
    _parent_id: BigNumberish,
    _child_id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  registerOriginal(
    _royalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerOriginal(uint256)"(
    _royalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  registerSecondary(
    _parent_id: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "registerSecondary(uint256)"(
    _parent_id: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  setRoyalty(
    _content_id: BigNumberish,
    royalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRoyalty(uint256,uint256)"(
    _content_id: BigNumberish,
    royalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    checkRight(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "checkRight(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deprive(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deprive(uint256,uint256)"(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAuthor(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getAuthor(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getContentsList(
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getContentsList(address)"(
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getNumberOfContents(overrides?: CallOverrides): Promise<BigNumber>;

    "getNumberOfContents()"(overrides?: CallOverrides): Promise<BigNumber>;

    getParent(
      child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParent(uint256)"(
      child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyalty(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoyalty(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recover(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "recover(uint256,uint256)"(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerOriginal(
      _royalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "registerOriginal(uint256)"(
      _royalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerSecondary(
      _parent_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "registerSecondary(uint256)"(
      _parent_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRoyalty(
      _content_id: BigNumberish,
      royalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRoyalty(uint256,uint256)"(
      _content_id: BigNumberish,
      royalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    RegisterOriginal(_from: string | null, royalty: null): EventFilter;

    RegisterSecondary(_from: string | null, parent_id: null): EventFilter;
  };

  estimateGas: {
    checkRight(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkRight(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deprive(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deprive(uint256,uint256)"(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getAuthor(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAuthor(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContentsList(
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getContentsList(address)"(
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfContents(overrides?: CallOverrides): Promise<BigNumber>;

    "getNumberOfContents()"(overrides?: CallOverrides): Promise<BigNumber>;

    getParent(
      child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParent(uint256)"(
      child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyalty(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoyalty(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recover(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "recover(uint256,uint256)"(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    registerOriginal(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerOriginal(uint256)"(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    registerSecondary(
      _parent_id: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "registerSecondary(uint256)"(
      _parent_id: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    setRoyalty(
      _content_id: BigNumberish,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRoyalty(uint256,uint256)"(
      _content_id: BigNumberish,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkRight(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkRight(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deprive(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deprive(uint256,uint256)"(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getAuthor(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAuthor(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContentsList(
      author: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getContentsList(address)"(
      author: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfContents(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNumberOfContents()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParent(
      child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getParent(uint256)"(
      child_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoyalty(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoyalty(uint256)"(
      _content_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recover(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "recover(uint256,uint256)"(
      _parent_id: BigNumberish,
      _child_id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    registerOriginal(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerOriginal(uint256)"(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    registerSecondary(
      _parent_id: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "registerSecondary(uint256)"(
      _parent_id: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    setRoyalty(
      _content_id: BigNumberish,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRoyalty(uint256,uint256)"(
      _content_id: BigNumberish,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}