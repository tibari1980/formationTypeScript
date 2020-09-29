//Déclaration et Différence entre Let et Var global et local
function varTest() {
    var a = 10;
    var b = true;
    if (b) {
        var a_1 = 1;
        console.log("" + a_1);
    }
    console.log("la valeur de a " + a);
}
varTest();
