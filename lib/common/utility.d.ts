import { PublicKey } from '@solana/web3.js';
import { bZ as ReplaceType } from '../api-34c9026e.js';
import 'axios';
import '../solana/type.js';
import 'bn.js';
import '@solana/spl-token';
import '../api/url.js';
import './owner.js';
import './txTool/lookupTable.js';
import './txTool/txType.js';
import 'decimal.js';
import '../module/token.js';
import './pubKey.js';
import './logger.js';
import '../module/currency.js';
import '../marshmallow/index.js';
import '../marshmallow/buffer-layout.js';

declare function sleep(ms: number): Promise<void>;
declare function getTimestamp(): number;
declare function notInnerObject(v: unknown): v is Record<string, any>;
declare function jsonInfo2PoolKeys<T>(jsonInfo: T): ReplaceType<T, string, PublicKey>;

export { getTimestamp, jsonInfo2PoolKeys, notInnerObject, sleep };
