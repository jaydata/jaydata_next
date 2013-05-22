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
            Property,
            Method,
            Event,
        }
        interface IMemberDefinition {
            name?: string;
            type: any;
        }
        interface IMemberDefinitionCollection {
            [name: string]: IMemberDefinition;
        }
    }
    class Class {
        static define(name: string, base: metadata.IClass, memberDefinitions: metadata.IMemberDefinitionCollection): metadata.IClass;
    }
}
declare var $data: Jay;
declare module Jay {
    class ObservableClass extends Jay.Class {
    }
    class Entity extends ObservableClass {
        static abc(): void;
    }
}
