export class Album {
    public _id: string;
    public img: string;
    public url: string;
    public caption: string;
    
    constructor(img: string, url: string, caption: string){
        this.img = img;
        this.url = url;
        this.caption = caption;
    }
}