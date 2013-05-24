declare module Jay {
    interface RuntimeClass {
        new(): any;
        className: string;
        base: RuntimeClass;
    }
    module Metadata {
        enum Kind {
            property,
            method,
            event,
            field,
        }
        class MetadataCollector<T> {
            public field(fieldPredicate: (item: T) => any): void;
        }
        interface IMemberDefinition {
            name?: string;
            value?: any;
            get?: any;
            set?: any;
            enumerable?: any;
            configurable?: any;
            kind?: Kind;
            type: any;
            required?: boolean;
            defaultValue?: any;
        }
        class MemberDefinition implements IMemberDefinition {
            public type: any;
        }
        interface IMemberDefinitionCollection {
            [name: string]: IMemberDefinition;
        }
        class MemberDefinitionCollection implements IMemberDefinitionCollection {
        }
        function createMemberDefinition(initData: any): MemberDefinition;
        class ClassEngine {
            public define(className: string, base: RuntimeClass, container: any, instanceDefinition: IMemberDefinitionCollection, classDefinition: IMemberDefinition): RuntimeClass;
        }
    }
    class Base {
        /**
        * Provides runtime type information for the type
        * @param {number} memberDefinitions   type information in JSON type or JayType format
        */
        static define(memberDefinitions: Metadata.MemberDefinitionCollection): void;
        /**
        * Provides runtime type information for the type
        * @param fieldName Information about the field name.
        * @param memberDefinition Information about the user.
        * @param memberDefinition.name The name of the user.
        * @param memberDefinition.type The email of the user.
        */
        static defineField(fieldName: string, memberDefinition: Metadata.IMemberDefinition): void;
        static extend(className: string, instanceDefinition: Metadata.IMemberDefinitionCollection): RuntimeClass;
    }
    var Class: Metadata.ClassEngine;
}
declare module Jay {
    class EntityContext extends Jay.Base {
    }
}
declare module Jay {
    class ObservableBase extends Jay.Base {
    }
    class Entity extends ObservableBase {
    }
}
declare module Jay {
    interface Queryable<T extends Jay.Entity> {
        filter(predicate: (item: T, param: any) => boolean, param: any): Queryable<T>;
        toArray(callback: (result: T[]) => void);
    }
}
declare module Jay {
    class EntitySet<T extends Jay.Entity> extends Jay.Base implements Jay.Queryable<T> {
        public where(predicate: (item: any) => boolean): Jay.Queryable<T>;
        public filter(predicate: (item: T) => boolean): Jay.Queryable<T>;
        public filter(predicate: (item: T, param: any) => boolean, param: any): Jay.Queryable<T>;
        public toArray(callback: (result: T[]) => void): void;
    }
}
/**
* Defines an order
*/
interface B extends Boolean {
}
declare class Order extends Jay.Entity {
    public Data: Date;
    public Completed: Boolean;
}
declare var o: Order;
declare class Order2 extends Jay.Entity {
}
declare var Border: Jay.RuntimeClass;
