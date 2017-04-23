export class Appearence{
  id:number;
  name:string;
  appearanceList:string[];
   constructor(app:Appearence){
    this.id = app.id;
    this.name = app.name;
    this.appearanceList = app.appearanceList;
  };
}