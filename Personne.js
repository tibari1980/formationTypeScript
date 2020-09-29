"use strict";
exports.__esModule = true;
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(_nom, _prenom, _age) {
        this._nom = _nom;
        this._prenom = _prenom;
        this._age = _age;
    }
    Personne.prototype.getNom = function () {
        return this._nom;
    };
    Personne.prototype.getPrenom = function () {
        return this._prenom;
    };
    Personne.prototype.setNom = function (value) {
        this._nom = value;
    };
    Personne.prototype.setPrenom = function (value) {
        this._prenom = value;
    };
    Personne.prototype.getAge = function () {
        return this._age;
    };
    Personne.prototype.setAge = function (value) {
        this._age = value;
    };
    Personne.prototype.showPersonne = function () {
        console.log('Nom :' + this._nom + ' Prénom : ' + this._prenom + ' Age :' + this._age);
    };
    return Personne;
}());
exports.Personne = Personne;
