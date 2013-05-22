module Jay {
    export interface IClass {
        (): any;
        className: string;
        base: IClass;
    }

    export module metadata {
        export interface IClass {
            //(): any;
            new (): any;
            className: string;
            base: IClass;
        }
        //export enum Kind {
        //    Property, Method, Event
        //}
        export interface IMemberDefinition {
            name?: string;
            type: any;
            //kind
        }

        export interface IMemberDefinitionCollection {
            [name: string]: IMemberDefinition;
        }


    }

    export class Base {
        constructor(public a: number) {
            console.log("base ctor");
        }    
    }

    export class Class {

        static define(name: string, base: metadata.IClass, memberDefinitions: metadata.IMemberDefinitionCollection): metadata.IClass {
            var result: metadata.IClass = ((base: any) => {
                var _class_: any = function () {
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
        }
    }
}

var $data = Jay;
