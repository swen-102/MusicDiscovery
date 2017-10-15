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
var core_1 = require('@angular/core');
var artist_service_1 = require('../../services/artist.service');
var ArtistsComponent = (function () {
    function ArtistsComponent(artistService) {
        var _this = this;
        this.artistService = artistService;
        this.artistService.getArtists()
            .subscribe(function (artists) {
            _this.artists = artists;
        });
    }
    ArtistsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'artists',
            templateUrl: 'artists.component.html'
        }), 
        __metadata('design:paramtypes', [artist_service_1.ArtistService])
    ], ArtistsComponent);
    return ArtistsComponent;
}());
exports.ArtistsComponent = ArtistsComponent;
//# sourceMappingURL=tasks.component.js.map