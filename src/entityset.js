var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="queryable.ts" />
/// <reference path="entity.ts" />
var Jay;
(function (Jay) {
    var EntitySet = (function (_super) {
        __extends(EntitySet, _super);
        function EntitySet() {
            _super.apply(this, arguments);
        }
        EntitySet.prototype.where = function (predicate) {
            return this;
        };

        EntitySet.prototype.filter = function (predicate, param) {
            return this;
        };
        EntitySet.prototype.toArray = function (callback) {
        };
        return EntitySet;
    })(Jay.Base);
    Jay.EntitySet = EntitySet;
})(Jay || (Jay = {}));
