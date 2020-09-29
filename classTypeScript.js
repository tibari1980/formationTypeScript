var Employe = /** @class */ (function () {
    function Employe(eNom, ePrenom, eAge) {
        this.nom = eNom;
        this.prenom = ePrenom;
        this.age = eAge;
    }
    Employe.prototype.createEmployes = function (employe) {
        console.log('Employe Created with success!):');
    };
    Employe.prototype.deleteEmploye = function (employe) {
        console.log('Employe deleted');
    };
    Employe.prototype.updateEmploye = function (employe) {
        console.log('Employe updated!:)');
    };
    Employe.prototype.showEmploye = function () {
        console.log('Nom :' + this.nom + " Prenom :" + this.prenom + " Age :" + this.age);
    };
    return Employe;
}());
var employe = new Employe('Tarik', 'Zeroual', 44);
employe.showEmploye();
