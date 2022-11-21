export interface BaseControllerIn<T> {
    data: T[];
    getAll(): T[];
    create(prop: keyof T): T;
}