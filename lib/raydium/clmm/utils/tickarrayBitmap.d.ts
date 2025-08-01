import BN__default from 'bn.js';
import { T as TickArrayBitmapExtensionType } from '../../../type-05b0e57b.js';
import '@solana/web3.js';
import 'decimal.js';
import '../../../api-34c9026e.js';
import 'axios';
import '../../../solana/type.js';
import '@solana/spl-token';
import '../../../api/url.js';
import '../../../common/owner.js';
import '../../../common/txTool/lookupTable.js';
import '../../../common/txTool/txType.js';
import '../../../module/token.js';
import '../../../common/pubKey.js';
import '../../../common/logger.js';
import '../../../module/currency.js';
import '../../../marshmallow/index.js';
import '../../../marshmallow/buffer-layout.js';
import '../layout.js';

declare const EXTENSION_TICKARRAY_BITMAP_SIZE = 14;
declare class TickArrayBitmap {
    static maxTickInTickarrayBitmap(tickSpacing: number): number;
    static getBitmapTickBoundary(tickarrayStartIndex: number, tickSpacing: number): {
        minValue: number;
        maxValue: number;
    };
    static nextInitializedTickArrayStartIndex(bitMap: BN__default, lastTickArrayStartIndex: number, tickSpacing: number, zeroForOne: boolean): {
        isInit: boolean;
        tickIndex: number;
    };
}
declare class TickArrayBitmapExtensionUtils {
    static getBitmapOffset(tickIndex: number, tickSpacing: number): number;
    static getBitmap(tickIndex: number, tickSpacing: number, tickArrayBitmapExtension: TickArrayBitmapExtensionType): {
        offset: number;
        tickarrayBitmap: BN__default[];
    };
    static checkExtensionBoundary(tickIndex: number, tickSpacing: number): void;
    static extensionTickBoundary(tickSpacing: number): {
        positiveTickBoundary: number;
        negativeTickBoundary: number;
    };
    static checkTickArrayIsInit(tickArrayStartIndex: number, tickSpacing: number, tickArrayBitmapExtension: TickArrayBitmapExtensionType): {
        isInitialized: boolean;
        startIndex: number;
    };
    static nextInitializedTickArrayFromOneBitmap(lastTickArrayStartIndex: number, tickSpacing: number, zeroForOne: boolean, tickArrayBitmapExtension: TickArrayBitmapExtensionType): {
        isInit: boolean;
        tickIndex: number;
    };
    static nextInitializedTickArrayInBitmap(tickarrayBitmap: BN__default[], nextTickArrayStartIndex: number, tickSpacing: number, zeroForOne: boolean): {
        isInit: boolean;
        tickIndex: number;
    };
    static tickArrayOffsetInBitmap(tickArrayStartIndex: number, tickSpacing: number): number;
}

export { EXTENSION_TICKARRAY_BITMAP_SIZE, TickArrayBitmap, TickArrayBitmapExtensionUtils };
