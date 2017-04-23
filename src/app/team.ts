export class Team{
  id:number;
  name:string;
  teamName:string;
  constructor(team:Team){
    this.id = team.id;
    this.name = team.name;
    this.teamName = team.teamName;
  };
}