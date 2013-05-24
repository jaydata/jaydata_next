/// <reference path="src/entityset.ts" />
/// <reference path="src/typesystem/class.ts" />
/// <reference path="src/entity.ts" />
/// <reference path="src/entitycontext.ts" />

//var DateField = (...args: any) => Date;
//var DateField = (...args: any) => Date;

/** 
  * Defines an order
  */
interface B extends Boolean {
}

class Order extends Jay.Entity {
    Date: Date;
    Complete: Boolean;
    //static metaData: any = {
    //    Data: { type: Date, required: false },
    //    Completed: { type: Boolean }
    //};
}

//var o = new Order({ Completed: false });
//Order.defineField(o => o., {});
//Order.defineField("Date", { )

//var o = new Order();


class Order2 extends Jay.Entity {

    //get Date(): Date {
    //    //return <Date>{ type: Date, required: true };
    //}

    //get Completed(): Boolean {
    //    //return {type: Boolean};
    //}
}

var Border = Jay.Entity.extend("abc", {

});

//class Store<TItem> {
//    readItem(key: number, success?: (i: TItem) => void ) {
//    }
//}
//get Orders(): Jay.EntitySet<Order> { return null; }
//declare var _super: any;
//declare var options: any;



//class MyContext extends Jay.EntityContext {

//    constructor(options?: any) {
//        super();
//    }

//    get Value(): number { return 15; }

//    get Products(): Jay.EntitySet<Order> { 
//        return new Jay.EntitySet();
//    }

//    //get ABC(): Function {
//    //    return () => { };
//    //}

//    //abc: (a: number) => number = (a) => { 
//    //    return 10;
//    //};
    
//    //abc2(a: number): number { return a; }

//    //abc3: Function = function () { };

//    //myFunction: () => number = function() {
//    //    return this.Value + options;
//    //}
//}



//class BBB extends Jay.Entity {

//}

//class MyContext2 extends Jay.EntityContext {
//    Products: Jay.EntitySet<BBB>;
//    ABC: Jay.EntitySet<BBB>;
//    Orders: Jay.EntitySet<BBB>;
//}

//var i = new MyContext();

//var i2 = new MyContext2();

//i2.
//i.Orders.toLiveArray();


//var c = new MyContext();


//c.Orders.filter((a) => a.Completed);
//c.Orders.filter((a, b) => a.Completed > b.p1, { p1: true });


