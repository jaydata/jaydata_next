/// <reference path="queryable.ts" />
/// <reference path="entity.ts" />
module Jay {
    
    export class EntitySet<T extends Entity>
      extends Jay.Base
      implements Jay.Queryable<T> {
        where(predicate: (item: any) => boolean): Queryable {
            return this;
        }
        
        //where(predicate: (item: T) => boolean): Queryable<T> {
        //    return this;
        //}
        filter(predicate: (item: T) => boolean): Queryable<T>;
        filter(predicate: (item: T, param: any) => boolean, param: any): Queryable<T>;
        filter(predicate: (item: T, param: any) => boolean, param?: any): Queryable<T> {
            return this;
        }
        toArray(callback: (result: T[]) => void ) {
        }

        //toArray(callback: (result: Array<T>) => void ) {
        
        //}

    }
}