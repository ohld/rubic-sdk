import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { UniswapV2AbstractProvider } from '@features/swap/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { JoeTrade } from '@features/swap/dexes/avalanche/joe/joe-trade';
export declare class JoeProvider extends UniswapV2AbstractProvider<JoeTrade> {
    readonly blockchain = BLOCKCHAIN_NAME.AVALANCHE;
    readonly InstantTradeClass: typeof JoeTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
