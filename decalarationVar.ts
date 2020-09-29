
let a:number;
let b:string;
let c:boolean;
let e:number[]=[1,3,5,6];
let h:string[]=['tibari','julle','julien','robert'];
let f:any[]=[true,'tibari',44,'A','20'];
let y:any;

enum Jour {LUNDI=1,MARDI=2,MERCREDI=3,jEUDI=4,VENDREDI=5,SAMEDI=6,DIMANCHE=7};
console.log(Jour.DIMANCHE);

h.forEach((value,key)=>{
    console.log('================================Affichage liste string=================');
    console.log(`${value} - ${key}\n`);
    console.log("========================fin afficharge liste string");
});

console.log("======================affichage number trie =====================");
e.forEach((a,b)=>a-b);
console.log(numbresFinale);
console.log("=============================fin affichage numbre trie =============");


