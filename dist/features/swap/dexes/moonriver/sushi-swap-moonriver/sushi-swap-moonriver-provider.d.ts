import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { UniswapV2AbstractProvider } from '@features/swap/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapMoonriverTrade } from '@features/swap/dexes/moonriver/sushi-swap-moonriver/sushi-swap-moonriver-trade';
export declare class SushiSwapMoonriverProvider extends UniswapV2AbstractProvider<SushiSwapMoonriverTrade> {
    readonly blockchain = BLOCKCHAIN_NAME.MOONRIVER;
    readonly InstantTradeClass: typeof SushiSwapMoonriverTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
