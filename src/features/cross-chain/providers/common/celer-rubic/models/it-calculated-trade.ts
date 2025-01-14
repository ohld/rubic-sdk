import BigNumber from 'bignumber.js';
import { CrossChainSupportedInstantTrade } from '@rsdk-features/cross-chain/providers/common/celer-rubic/models/cross-chain-supported-instant-trade';

export interface ItCalculatedTrade {
    toAmount: BigNumber;
    providerIndex: number;
    instantTrade: CrossChainSupportedInstantTrade;
}
