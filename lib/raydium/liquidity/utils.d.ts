import { PublicKey, Connection } from '@solana/web3.js';
import BN__default from 'bn.js';
import { x as AmmV4Keys, y as AmmV5Keys } from '../../api-34c9026e.js';
import { LiquidityPoolKeys, AmmRpcData, ComputeAmountOutParam } from './type.js';
import 'axios';
import '../../solana/type.js';
import '@solana/spl-token';
import '../../api/url.js';
import '../../common/owner.js';
import '../../common/txTool/lookupTable.js';
import '../../common/txTool/txType.js';
import 'decimal.js';
import '../../module/token.js';
import '../../common/pubKey.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';
import './layout.js';

declare type AssociatedName = "amm_associated_seed" | "lp_mint_associated_seed" | "coin_vault_associated_seed" | "pc_vault_associated_seed" | "lp_mint_associated_seed" | "temp_lp_token_associated_seed" | "open_order_associated_seed" | "target_associated_seed" | "withdraw_associated_seed";
interface GetAssociatedParam {
    name: AssociatedName;
    programId: PublicKey;
    marketId: PublicKey;
}
declare function getAssociatedConfigId({ programId }: {
    programId: PublicKey;
}): PublicKey;
declare function getLiquidityAssociatedId({ name, programId, marketId }: GetAssociatedParam): PublicKey;
declare function getAssociatedOpenOrders({ programId, marketId }: {
    programId: PublicKey;
    marketId: PublicKey;
}): PublicKey;
declare function getLiquidityAssociatedAuthority({ programId }: {
    programId: PublicKey;
}): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getAssociatedPoolKeys({ version, marketVersion, marketId, baseMint, quoteMint, baseDecimals, quoteDecimals, programId, marketProgramId, }: {
    version: 4 | 5;
    marketVersion: 3;
    marketId: PublicKey;
    baseMint: PublicKey;
    quoteMint: PublicKey;
    baseDecimals: number;
    quoteDecimals: number;
    programId: PublicKey;
    marketProgramId: PublicKey;
}): LiquidityPoolKeys;
declare function fetchMultipleInfo({ connection, poolKeysList, config, }: {
    connection: Connection;
    poolKeysList: (AmmV4Keys | AmmV5Keys)[];
    config: any;
}): Promise<{
    status: BN__default;
    baseDecimals: number;
    quoteDecimals: number;
    lpDecimals: number;
    baseReserve: BN__default;
    quoteReserve: BN__default;
    lpSupply: BN__default;
    startTime: BN__default;
}[]>;
declare const toAmmComputePoolInfo: (poolData: Record<string, AmmRpcData>) => Record<string, ComputeAmountOutParam["poolInfo"]>;

export { fetchMultipleInfo, getAssociatedConfigId, getAssociatedOpenOrders, getAssociatedPoolKeys, getLiquidityAssociatedAuthority, getLiquidityAssociatedId, toAmmComputePoolInfo };
