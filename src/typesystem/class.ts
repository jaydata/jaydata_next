module Jay {

    export interface RuntimeClass {
        new (): any;
        className: string;
        base: RuntimeClass;
    }

    export module Metadata {

        export enum Kind {
            property,
            method,
            event,
            field
        }

        export class MetadataCollector<T> {
            field(fieldPredicate: (item: T) => any) {
            
            }
        }

        export interface IMemberDefinition {
            name?: string;
            value?: any;
            get?: any;
            set?: any;
            enumerable?: any;
            configurable?: any;
            kind?: Metadata.Kind;
            type: any;
            required?: boolean;
            defaultValue?: any;
        }

        export class MemberDefinition implements IMemberDefinition {
            //name: string;
            type: any;
            //kind: Metadata.Kind;
            //defaultValue: any;
        }

        export interface IMemberDefinitionCollection {
            [name: string]: IMemberDefinition;
        }

        export class MemberDefinitionCollection implements IMemberDefinitionCollection {
            
        }

        export function createMemberDefinition(initData: any): Metadata.MemberDefinition {
            if (initData instanceof MemberDefinition) {
                return initData;
            }
            
        }

        export class ClassEngine {
            
            define(className: string,
                base: Jay.RuntimeClass,
                container: any,
                instanceDefinition: Metadata.IMemberDefinitionCollection,
                classDefinition: Metadata.IMemberDefinition): Jay.RuntimeClass {
                    var result: Jay.RuntimeClass = ((base: any) => {
                    var _class_: any = function () {
                        //base.apply(this, arguments);
                        
                    };

                    _class_.prototype = Object.create(base.prototype, { constructor: { value: _class_, enumerable: false } });

                    for (var j in instanceDefinition) {
                        var md = createMemberDefinition(instanceDefinition[j]);
                        _class_.prototype[j] = instanceDefinition[j];
                    }
                    
                    _class_.className = className;
                    _class_.base = null;
                    return _class_;
                })(base || Base);
                return result;
            }
        }
    }

    export class Base {

        /**
          * Provides runtime type information for the type
          * @param {number} memberDefinitions   type information in JSON type or JayType format
          */
        static define(memberDefinitions: Metadata.MemberDefinitionCollection) : void {
        
        }

        /**
        * Provides runtime type information for the type
        * @param fieldName Information about the field name.
        * @param memberDefinition Information about the user.
        * @param memberDefinition.name The name of the user.
        * @param memberDefinition.type The email of the user.
        */
        static defineField<T>(field: (entity:T) => any, memberDefinition: Metadata.IMemberDefinition): void {
        
        }


        static extend(className: string, instanceDefinition: Metadata.IMemberDefinitionCollection): RuntimeClass {
            return Class.define(className, this, null, instanceDefinition, null);
        }

        
    }


    
    export var Class = new Metadata.ClassEngine();
}


