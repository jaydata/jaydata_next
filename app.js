var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Order = (function (_super) {
    __extends(Order, _super);
    function Order() {
        _super.apply(this, arguments);
    }
    return Order;
})(Jay.Entity);

//var o = new Order({ Completed: false });
//Order.defineField(o => o., {});
//Order.defineField("Date", { )
//var o = new Order();
var Order2 = (function (_super) {
    __extends(Order2, _super);
    function Order2() {
        _super.apply(this, arguments);
    }
    return Order2;
})(Jay.Entity);

var Border = Jay.Entity.extend("abc", {});
