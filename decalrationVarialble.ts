
//Déclaration et Différence entre Let et Var global et local
function varTest(){
    let a=10;
    let b=true;
    if(b){
        let a=1;
        console.log(`${a}`);
    }
    console.log(`la valeur de a ${a}`);
}

varTest();

let z:number;
z