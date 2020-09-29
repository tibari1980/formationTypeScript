export class Personne{

    constructor(private _nom?:string,private _prenom?:string,private _age?:number){}

    getNom(){
        return  this._nom;
    }
    getPrenom(){
        return this._prenom;
    }
    setNom(value){
        this._nom=value;
    }
    setPrenom(value){
        this._prenom=value;
    }
    getAge(){
        return this._age;
    }
    setAge(value){
        this._age=value;
    }
    showPersonne(){
        console.log('Nom :'+this._nom+' Prénom : '+this._prenom +' Age :'+ this._age);
    }
}