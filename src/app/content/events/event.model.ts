export class Event {
    public name: string;
    public description: string;
    public imagePath: string;
    public location: string;
    public date: Date;
    public category: string;

    constructor(name: string, desc: string, imagePath: string, location: string, date: Date, category: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.location = location;
        this.date = date;
        this.category = category;
    }
}