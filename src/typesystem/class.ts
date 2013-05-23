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
        export enum Kind {
            property,
            method,
            event
        }

        export interface IMemberDefinition {
            name?: string;
            type: any;
            kind: metadata.Kind;
        }

        //export class MemberDefinition implements IMemberDefinition {
        //}

        export interface IMemberDefinitionCollection {
            [name: string]: IMemberDefinition;
        }


        export class ClassEngine {

            define(name: string, base: metadata.IClass, memberDefinitions: metadata.IMemberDefinitionCollection): metadata.IClass {
                var result: metadata.IClass = ((base: any) => {
                    var _class_: any = function () {
                        base.apply(this, arguments);
                    };
                    _class_.prototype = Object.create(base.prototype, { constructor: { value: _class_, enumerable: false } });
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

    export class Base {
        constructor(public a: number) {
        }

        static define(memberDefinitions: metadata.IMemberDefinitionCollection) {

        }
    }


    
    export var Class = new metadata.ClassEngine();
}

declare var $data;
$data = Jay;
