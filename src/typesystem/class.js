var Jay;
(function (Jay) {
    var Base = (function () {
        function Base(a) {
            this.a = a;
            console.log("base ctor");
        }
        return Base;
    })();
    Jay.Base = Base;

    var Class = (function () {
        function Class() {
        }
        Class.define = function (name, base, memberDefinitions) {
            var _this = this;
            var result = (function (base) {
                var _class_ = function () {
                    console.log("sc ctor");
                    base.apply(this, arguments);
                };

                console.log("sc define");

                //_class_.prototype = new base();
                _class_.prototype = Object.create(base.prototype, null);

                _class_.prototype.constructor = _class_;
                for (var j in memberDefinitions) {
                    var md = memberDefinitions[j];
                    _class_.prototype[j] = memberDefinitions[j];
                }
                _class_.className = name;
                _class_.base = null;
                return _class_;
            })(base || Base);
            return result;
        };
        return Class;
    })();
    Jay.Class = Class;
})(Jay || (Jay = {}));

var $data = Jay;
//@ sourceMappingURL=class.js.map
