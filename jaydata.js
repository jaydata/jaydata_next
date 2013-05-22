var Jay;
(function (Jay) {
    (function (metadata) {
        (function (Kind) {
            Kind[Kind["Property"] = 0] = "Property";
            Kind[Kind["Method"] = 1] = "Method";
            Kind[Kind["Event"] = 2] = "Event";
        })(metadata.Kind || (metadata.Kind = {}));
        var Kind = metadata.Kind;
    })(Jay.metadata || (Jay.metadata = {}));
    var metadata = Jay.metadata;

    var Class = (function () {
        function Class() {
        }
        Class.define = function (name, base, memberDefinitions) {
            var _this = this;
            console.log(this === Class);
            var result = (function (base) {
                var _class_ = function () {
                    if (base !== Class) {
                        base.apply(this);
                    }
                };

                _class_.prototype = new base();
                for (var j in memberDefinitions) {
                    var md = memberDefinitions[j];
                    _class_.prototype[j] = memberDefinitions[j];
                }
                _class_.className = name;
                _class_.base = null;
                return _class_;
            })(base || Class);
            return result;
        };
        return Class;
    })();
    Jay.Class = Class;
})(Jay || (Jay = {}));

var $data = Jay;
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
    })(Jay.Class);
    Jay.ObservableClass = ObservableClass;

    var Entity = (function (_super) {
        __extends(Entity, _super);
        function Entity() {
            _super.apply(this, arguments);
        }
        Entity.abc = function () {
        };
        return Entity;
    })(ObservableClass);
    Jay.Entity = Entity;
})(Jay || (Jay = {}));
