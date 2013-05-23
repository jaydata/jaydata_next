declare module Jay {
    interface IClass {
        (): any;
        className: string;
        base: IClass;
    }
    module metadata {
        interface IClass {
            new(): any;
            className: string;
            base: IClass;
        }
        enum Kind {
            property,
            method,
            event,
        }
        interface IMemberDefinition {
            name?: string;
            type: any;
            kind: Kind;
        }
        interface IMemberDefinitionCollection {
            [name: string]: IMemberDefinition;
        }
        class ClassEngine {
            public define(name: string, base: IClass, memberDefinitions: IMemberDefinitionCollection): IClass;
        }
    }
    class Base {
        public a: number;
        constructor(a: number);
        static define(memberDefinitions: metadata.IMemberDefinitionCollection): void;
    }
    var Class: metadata.ClassEngine;
}
declare module Jay {
    class ObservableClass extends Jay.Base {
    }
    class Entity extends ObservableClass {
        static abc(): void;
    }
}
