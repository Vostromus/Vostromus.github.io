"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
var hero_service_1 = require("./hero.service");
var team_1 = require("./team");
var team_service_1 = require("./team.service");
var appearence_1 = require("./appearence");
var appearence_service_1 = require("./appearence.service");
var GenericCascadesComponent = (function () {
    function GenericCascadesComponent(heroService, teamService, apperenceService) {
        this.heroService = heroService;
        this.teamService = teamService;
        this.apperenceService = apperenceService;
        this.movies = [];
    }
    GenericCascadesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
        return this.heroes;
    };
    GenericCascadesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    GenericCascadesComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().then(function (teams) {
            var scope = _this;
            _.each(teams, function (dataObj) {
                var aNewTeam = new team_1.Team(dataObj);
                scope.teams.push(aNewTeam);
            });
        });
        return this.teams;
    };
    GenericCascadesComponent.prototype.getAppearences = function () {
        var _this = this;
        this.apperenceService.getAppearences().then(function (appearances) {
            var scope = _this;
            _.each(appearances, function (dataObj) {
                var aNewTeam = new appearence_1.Appearence(dataObj);
                scope.appearences.push(aNewTeam);
            });
        });
        return this.appearences;
    };
    GenericCascadesComponent.prototype.getUniqueValues = function (data, propLabel) {
        // Unique values
        return _.uniqBy(data, propLabel);
    };
    GenericCascadesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var objects = [this.getHeroes(), this.getTeams(), this.getAppearences()];
        this.testingProp = "Booga Booga";
        this.teams = [];
        this.appearences = [];
        Promise.all(objects).then(function (values) {
            var scope = _this;
            _.each(_this, function (props) {
                if (_.isArray(props)) {
                    if (props[0] instanceof team_1.Team)
                        //console.log(props);
                        scope.teams = scope.getUniqueValues(props, 'teamName');
                }
                if (_.isArray(props)) {
                    if (props[0] instanceof appearence_1.Appearence) 
                    //console.log(props);
                    {
                        var iDArr_1 = [];
                        _.each(props, function (obj) {
                            _.each(obj['appearanceList'], function (o) {
                                iDArr_1.push(o);
                            });
                        });
                        scope.movies = _.uniq(iDArr_1);
                    }
                }
            });
        });
    };
    return GenericCascadesComponent;
}());
GenericCascadesComponent = __decorate([
    core_1.Component({
        selector: 'generic-cascades',
        templateUrl: './generic-cascades.component.html',
        providers: [hero_service_1.HeroService, team_service_1.TeamService, appearence_service_1.AppearenceService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, team_service_1.TeamService, appearence_service_1.AppearenceService])
], GenericCascadesComponent);
exports.GenericCascadesComponent = GenericCascadesComponent;
//# sourceMappingURL=generic-cascades.component.js.map