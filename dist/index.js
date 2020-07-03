"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_rounded_up_down_1 = require("@writetome51/get-rounded-up-down");
var PaginationPageInfo = /** @class */ (function () {
    function PaginationPageInfo(__dataSource) {
        this.__dataSource = __dataSource;
    }
    PaginationPageInfo.prototype.setItemsPerPage = function (value) {
        if (value < 1)
            throw new Error('The number of items per page must be at least 1');
        this.__itemsPerPage = value;
    };
    PaginationPageInfo.prototype.getItemsPerPage = function () {
        return this.__itemsPerPage;
    };
    PaginationPageInfo.prototype.getTotalPages = function () {
        return get_rounded_up_down_1.getRoundedUp(this.__dataSource.dataTotal / this.getItemsPerPage());
    };
    return PaginationPageInfo;
}());
exports.PaginationPageInfo = PaginationPageInfo;
