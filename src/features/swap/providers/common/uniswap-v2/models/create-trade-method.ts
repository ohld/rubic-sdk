import { TransactionReceipt } from 'web3-eth';
import { InternalUniswapV2Trade } from 'src/features/swap/providers/common/uniswap-v2/models/uniswap-v2-trade';
import { SwapTransactionOptionsWithGasLimit } from 'src/features/swap/models/swap-transaction-options';

export type CreateTradeMethod = (
    trade: InternalUniswapV2Trade,
    options: SwapTransactionOptionsWithGasLimit
) => Promise<TransactionReceipt>;