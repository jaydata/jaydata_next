var Jay;
(function (Jay) {
    (function (Metadata) {
        (function (Kind) {
            Kind[Kind["property"] = 0] = "property";
            Kind[Kind["method"] = 1] = "method";
            Kind[Kind["event"] = 2] = "event";

            Kind[Kind["field"] = 3] = "field";
        })(Metadata.Kind || (Metadata.Kind = {}));
        var Kind = Metadata.Kind;

        var MetadataCollector = (function () {
            function MetadataCollector() {
            }
            MetadataCollector.prototype.field = function (fieldPredicate) {
            };
            return MetadataCollector;
        })();
        Metadata.MetadataCollector = MetadataCollector;

        var MemberDefinition = (function () {
            function MemberDefinition() {
            }
            return MemberDefinition;
        })();
        Metadata.MemberDefinition = MemberDefinition;

        var MemberDefinitionCollection = (function () {
            function MemberDefinitionCollection() {
            }
            return MemberDefinitionCollection;
        })();
        Metadata.MemberDefinitionCollection = MemberDefinitionCollection;

        function createMemberDefinition(initData) {
            if (initData instanceof MemberDefinition) {
                return initData;
            }
        }
        Metadata.createMemberDefinition = createMemberDefinition;

        var ClassEngine = (function () {
            function ClassEngine() {
            }
            ClassEngine.prototype.define = function (className, base, container, instanceDefinition, classDefinition) {
                var result = (function (base) {
                    var _class_ = function () {
                    };

                    _class_.prototype = Object.create(base.prototype, { constructor: { value: _class_, enumerable: false } });

                    for (var j in instanceDefinition) {
                        var md = createMemberDefinition(instanceDefinition[j]);
                        _class_.prototype[j] = instanceDefinition[j];
                    }

                    _class_.className = className;
                    _class_.base = null;
                    return _class_;
                })(base || Jay.Base);
                return result;
            };
            return ClassEngine;
        })();
        Metadata.ClassEngine = ClassEngine;
    })(Jay.Metadata || (Jay.Metadata = {}));
    var Metadata = Jay.Metadata;

    var Base = (function () {
        function Base() {
        }
        Base.define = /**
        * Provides runtime type information for the type
        * @param {number} memberDefinitions   type information in JSON type or JayType format
        */
        function (memberDefinitions) {
        };

        Base.defineField = /**
        * Provides runtime type information for the type
        * @param fieldName Information about the field name.
        * @param memberDefinition Information about the user.
        * @param memberDefinition.name The name of the user.
        * @param memberDefinition.type The email of the user.
        */
        function (fieldName, memberDefinition) {
        };

        Base.extend = function (className, instanceDefinition) {
            return Jay.Class.define(className, this, null, instanceDefinition, null);
        };
        return Base;
    })();
    Jay.Base = Base;

    Jay.Class = new Metadata.ClassEngine();
})(Jay || (Jay = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="typesystem/class.ts" />
var Jay;
(function (Jay) {
    var EntityContext = (function (_super) {
        __extends(EntityContext, _super);
        function EntityContext() {
            _super.apply(this, arguments);
        }
        return EntityContext;
    })(Jay.Base);
    Jay.EntityContext = EntityContext;
})(Jay || (Jay = {}));
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
var Order = (function (_super) {
    __extends(Order, _super);
    function Order() {
        _super.apply(this, arguments);
    }
    return Order;
})(Jay.Entity);

//var o = new Order({ Completed: false });
//Order.defineField("asd", {);
//Order.defineField("Date", { )
var o = new Order();

var Order2 = (function (_super) {
    __extends(Order2, _super);
    function Order2() {
        _super.apply(this, arguments);
    }
    return Order2;
})(Jay.Entity);

var Border = Jay.Entity.extend("abc", {});
