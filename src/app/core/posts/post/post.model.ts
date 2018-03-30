export class Post {
    public titlePost: string;
    public date: string;
    public _id: string;
    public author: string;
    public contentPost: string;
    public imagePath: string[];
    
    constructor(titlePost: string, date:string, author:string, contentPost:string, imagePath:string[]){
        this.titlePost = titlePost;
        this.date = date;
        this.author = author;
        this.contentPost = contentPost;
        this.imagePath = imagePath;
    }
}