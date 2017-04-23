"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_appearence_1 = require("./mock-appearence");
var AppearenceService = (function () {
    function AppearenceService() {
    }
    AppearenceService.prototype.getAppearences = function () {
        return Promise.resolve(mock_appearence_1.APPEARENCES);
    };
    return AppearenceService;
}());
AppearenceService = __decorate([
    core_1.Injectable()
], AppearenceService);
exports.AppearenceService = AppearenceService;
//# sourceMappingURL=appearence.service.js.map