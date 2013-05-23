var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Jay;
(function (Jay) {
    var ObservableClass = (function (_super) {
        __extends(ObservableClass, _super);
        function ObservableClass() {
            _super.apply(this, arguments);

        }
        return ObservableClass;
    })(Jay.Base);
    Jay.ObservableClass = ObservableClass;    
    var Entity = (function (_super) {
        __extends(Entity, _super);
        function Entity() {
            _super.apply(this, arguments);

        }
        Entity.abc = function abc() {
        };
        return Entity;
    })(ObservableClass);
    Jay.Entity = Entity;    
})(Jay || (Jay = {}));
