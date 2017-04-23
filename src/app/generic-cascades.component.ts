import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Team } from './team';
import { TeamService } from './team.service';

import { Appearence } from './appearence';
import { AppearenceService } from './appearence.service';

@Component({
  selector: 'generic-cascades',
  templateUrl: './generic-cascades.component.html',
 providers:[HeroService,TeamService,AppearenceService]
 
})
export class GenericCascadesComponent  implements OnInit{ 
    constructor(private heroService:HeroService, private teamService:TeamService, private apperenceService:AppearenceService) {}

    heroes: Hero[];
    selectedHero: Hero;
    scope:this;
    getHeroes(): Hero[]{
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
      return this.heroes;
    }

    onSelect(hero: Hero):void {
      this.selectedHero = hero;
    }
    
    teams: Team[];//Array<Team> = [];

    getTeams(): Team[]{
      this.teamService.getTeams().then(teams =>{ 
      let scope = this;
        _.each(teams,function(dataObj){

            let aNewTeam = new Team(dataObj);
            scope.teams.push(aNewTeam);

        })
      
    });
      return this.teams;
    }

    appearences: Appearence[];
    movies: string[] =[];
    getAppearences(): Appearence[]{
      this.apperenceService.getAppearences().then(appearances  => {
        let scope = this;
        _.each(appearances,function(dataObj){

            let aNewTeam = new Appearence(dataObj);
            scope.appearences.push(aNewTeam);

        })
      
    });
      return this.appearences;
    }

    getUniqueValues(data: any[], propLabel: string): any[]
    {
        // Unique values
        return _.uniqBy(data, propLabel);
    }

    testingProp: string

    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      let objects = [this.getHeroes(),this.getTeams(), this.getAppearences()];
      this.testingProp = "Booga Booga";
      this.teams = [];
      this.appearences = [];
      Promise.all(objects).then(values =>{

          let scope = this;
          _.each(this,function(props){
               if(_.isArray(props))
               {
                 if(  props[0] instanceof Team)
                        //console.log(props);
                        scope.teams = scope.getUniqueValues(props,'teamName');
               }
                if(_.isArray(props))
               {
                 if(  props[0] instanceof Appearence)
                        //console.log(props);
                       {
                          let iDArr:string[] = [];
                          _.each(props,function(obj)
                            {
                               _.each(obj['appearanceList'], function(o)
                                {
                                  iDArr.push(o);
                                })
                            });

                          scope.movies = _.uniq(iDArr);
                       }
               }
          })

        }
       
      );
      

    }


}
