var Client = /** @class */ (function () {
    function Client(cName, cPrenom, cAdresse, Cage, Cisactive) {
        this.lName = cName;
        this.Lprenom = cPrenom;
        this.age = Cage;
        this.adresse = cAdresse;
        this.isActive = Cisactive;
    }
    Client.prototype.getNom = function () {
        return this.lName;
    };
    Client.prototype.setNom = function (sNom) {
        this.lName = sNom;
    };
    Client.prototype.getPrenom = function () {
        return this.Lprenom;
    };
    Client.prototype.setPrenom = function (sPrenom) {
        this.Lprenom = sPrenom;
    };
    Client.prototype.getAdresse = function () {
        return this.adresse;
    };
    Client.prototype.setAdresse = function (sAdress) {
        this.adresse = sAdress;
    };
    Client.prototype.getIsActive = function () {
        return this.isActive;
    };
    Client.prototype.setIsActive = function (sIsActive) {
        this.isActive = sIsActive;
    };
    Client.prototype.afficherClient = function () {
        console.log('Nom :' + this.lName + 'Prénom :' + this.Lprenom + ' Adresse :' + this.adresse + ' Age :' + this.age + ' Active :' + this.isActive);
    };
    return Client;
}());
//Creation d'un client
var client;
client = new Client('zeroual', 'tibari', '11 place des alpes 78280 guyancourt', 40, true);
client.afficherClient();
console.log('========================Utilisation Setter And Getter =========================');
client.setNom('Boudarga');
client.setPrenom('Bacha');
client.afficherClient();
