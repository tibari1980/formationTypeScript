var a;
var b;
var c;
var e = [1, 3, 5, 6];
var h = ['tibari', 'julle', 'julien', 'robert'];
var f = [true, 'tibari', 44, 'A', '20'];
var y;
var Jour;
(function (Jour) {
    Jour[Jour["LUNDI"] = 1] = "LUNDI";
    Jour[Jour["MARDI"] = 2] = "MARDI";
    Jour[Jour["MERCREDI"] = 3] = "MERCREDI";
    Jour[Jour["jEUDI"] = 4] = "jEUDI";
    Jour[Jour["VENDREDI"] = 5] = "VENDREDI";
    Jour[Jour["SAMEDI"] = 6] = "SAMEDI";
    Jour[Jour["DIMANCHE"] = 7] = "DIMANCHE";
})(Jour || (Jour = {}));
;
console.log(Jour.DIMANCHE);
h.forEach(function (value, key) {
    console.log('================================Affichage liste string=================');
    console.log(value + " - " + key + "\n");
    console.log("========================fin afficharge liste string");
});
console.log("======================affichage number trie =====================");
var numbresFinale = e.forEach(function (a, b) { return a - b; });
console.log(numbresFinale);
console.log("=============================fin affichage numbre trie =============");
