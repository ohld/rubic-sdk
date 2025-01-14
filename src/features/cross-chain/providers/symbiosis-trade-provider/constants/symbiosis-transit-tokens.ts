import { TokenStruct } from 'src/core/blockchain/tokens/token';
import { BLOCKCHAIN_NAME } from 'src/core';
import { SymbiosisCrossChainSupportedBlockchain } from 'src/features/cross-chain/providers/symbiosis-trade-provider/constants/symbiosis-cross-chain-supported-blockchain';

export const symbiosisTransitTokens: Record<SymbiosisCrossChainSupportedBlockchain, TokenStruct> = {
    [BLOCKCHAIN_NAME.ETHEREUM]: {
        blockchain: BLOCKCHAIN_NAME.ETHEREUM,
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        name: 'USDC',
        symbol: 'USDC',
        decimals: 6
    },
    [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
        blockchain: BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
        address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
        name: 'USDC',
        symbol: 'USDC',
        decimals: 18
    },
    [BLOCKCHAIN_NAME.POLYGON]: {
        blockchain: BLOCKCHAIN_NAME.POLYGON,
        address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        name: 'USDC',
        symbol: 'USDC',
        decimals: 6
    },
    [BLOCKCHAIN_NAME.AVALANCHE]: {
        blockchain: BLOCKCHAIN_NAME.AVALANCHE,
        address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
        name: 'USDC',
        symbol: 'USDC.e',
        decimals: 6
    },
    [BLOCKCHAIN_NAME.BOBA]: {
        blockchain: BLOCKCHAIN_NAME.BOBA,
        address: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
        name: 'USDC',
        symbol: 'USDC',
        decimals: 6
    }
};
