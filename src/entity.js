var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="entitycontext.ts" />
/// <reference path="typesystem/class.ts" />
var Jay;
(function (Jay) {
    var ObservableBase = (function (_super) {
        __extends(ObservableBase, _super);
        function ObservableBase() {
            _super.apply(this, arguments);
        }
        return ObservableBase;
    })(Jay.Base);
    Jay.ObservableBase = ObservableBase;

    var Entity = (function (_super) {
        __extends(Entity, _super);
        function Entity() {
            _super.apply(this, arguments);
        }
        return Entity;
    })(Jay.ObservableBase);
    Jay.Entity = Entity;
})(Jay || (Jay = {}));
