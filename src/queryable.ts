/// <reference path="typesystem/class.ts" />
/// <reference path="entity.ts" />

module Jay {
//    export interface Queryable {
////        where(predicate: (item: any) => boolean): Queryable;
//        filter(predicate: (item: any, param: any) => boolean, param: any): Queryable;
//        toArray( callback: (result: any[]) => void );
//    }

    export interface Queryable<T extends Jay.Entity> {
        //        where(predicate: (item: T) => boolean): Queryable<T>;

        filter(predicate: (item: T, param : any) => boolean, param: any): Queryable<T>;
        toArray( callback: (result: Array<T>) => void);
    }
}