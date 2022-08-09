import { BLOCKCHAIN_NAME } from '@rsdk-core/blockchain/models/blockchain-name';

/**
 * Stores rubic cross-chain contract addresses.
 */
export const rubicCrossChainContractsAddresses = {
    [BLOCKCHAIN_NAME.ETHEREUM]: '0xD8b19613723215EF8CC80fC35A1428f8E8826940',
    [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: '0x70e8C8139d1ceF162D5ba3B286380EB5913098c4',
    [BLOCKCHAIN_NAME.POLYGON]: '0xeC52A30E4bFe2D6B0ba1D0dbf78f265c0a119286',
    [BLOCKCHAIN_NAME.AVALANCHE]: '0x541eC7c03F330605a2176fCD9c255596a30C00dB',
    [BLOCKCHAIN_NAME.MOONRIVER]: '0xD8b19613723215EF8CC80fC35A1428f8E8826940',
    [BLOCKCHAIN_NAME.FANTOM]: '0xd23B4dA264A756F427e13C72AB6cA5A6C95E4608',
    [BLOCKCHAIN_NAME.HARMONY]: '0x5681012ccc3ec5bafefac21ce4280ad7fe22bbf2',
    [BLOCKCHAIN_NAME.ARBITRUM]: '0x5F3c8d58A01Aad4f875d55E2835D82e12f99723c',
    [BLOCKCHAIN_NAME.AURORA]: '0x55Be05ecC1c417B16163b000CB71DcE8526a5D06',
    [BLOCKCHAIN_NAME.TELOS]: '0x5356e4614864aa532071fe57bae20ed67e6f2e2c'
} as const;