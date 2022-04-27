export class Employee {
    public _id?: string;
    public name?: string;
    public email?: string;
    public password?: string;
    public address?:string;
    public mobile?:number;
    public department?: {
        dept_id?: number,
        dept_name: string
    };
    public role?: {
        role_id?: number,
        role_name: string
    };
    public image?:FileList | null
}
