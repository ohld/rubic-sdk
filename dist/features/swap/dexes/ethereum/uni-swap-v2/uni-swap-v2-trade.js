"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniSwapV2Trade = void 0;
var uniswap_v2_abstract_trade_1 = require("@features/swap/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade");
var constants_1 = require("@features/swap/dexes/ethereum/uni-swap-v2/constants");
var UniSwapV2Trade = /** @class */ (function (_super) {
    __extends(UniSwapV2Trade, _super);
    function UniSwapV2Trade(tradeStruct) {
        var _this = _super.call(this, tradeStruct) || this;
        _this.contractAddress = constants_1.UNISWAP_ETHEREUM_CONTRACT_ADDRESS;
        return _this;
    }
    return UniSwapV2Trade;
}(uniswap_v2_abstract_trade_1.UniswapV2AbstractTrade));
exports.UniSwapV2Trade = UniSwapV2Trade;
//# sourceMappingURL=uni-swap-v2-trade.js.map