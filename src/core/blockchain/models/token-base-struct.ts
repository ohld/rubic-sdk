import { BlockchainName } from '@rsdk-core/blockchain/models/blockchain-name';

/**
 * Stores basic information of token.
 */
export interface TokenBaseStruct {
    address: string;
    blockchain: BlockchainName;
}
