export class Document {
    public name: string;
    public url: string;
    public _id: string;

    constructor(name: string, url:string){
        this.name = name;
        this.url = url;
    }
}