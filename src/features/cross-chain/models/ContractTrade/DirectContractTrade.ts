import { CrossChainSupportedBlockchain } from '@features/cross-chain/constants/CrossChainSupportedBlockchains';
import { CrossChainContract } from '@features/cross-chain/cross-chain-contract/cross-chain-contract';
import { PriceTokenAmount } from '@core/blockchain/tokens/price-token-amount';
import { ContractTrade } from '@features/cross-chain/models/ContractTrade/ContractTrade';
import BigNumber from 'bignumber.js';
import { Token } from '@core/blockchain/tokens/token';

export class DirectContractTrade extends ContractTrade {
    public get fromToken(): PriceTokenAmount {
        return this.token;
    }

    public get toToken(): PriceTokenAmount {
        return this.token;
    }

    public get toAmount(): BigNumber {
        return this.token.tokenAmount;
    }

    public get toAmountWei(): BigNumber {
        return this.token.weiAmount;
    }

    public get toAmountMin(): BigNumber {
        return this.toAmount;
    }

    public get path(): ReadonlyArray<Token> {
        return [this.token];
    }

    constructor(
        public readonly blockchain: CrossChainSupportedBlockchain,
        public readonly contract: CrossChainContract,
        private readonly token: PriceTokenAmount
    ) {
        super(blockchain, contract);
    }
}
