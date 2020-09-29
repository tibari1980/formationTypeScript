class Employe{
    nom:string;
    prenom:string;
    age:number;
    constructor(eNom:string,ePrenom:string,eAge:number){
        this.nom=eNom;
        this.prenom=ePrenom;
        this.age=eAge;
    }

     createEmployes(employe:Employe){
        console.log('Employe Created with success!):');
    }

    deleteEmploye(employe:Employe){
        console.log('Employe deleted');
    }
    updateEmploye(employe:Employe){
        console.log('Employe updated!:)');
    }
    showEmploye(){
        console.log('Nom :'+this.nom+ " Prenom :"+ this.prenom +" Age :"+this.age);
    }
}
let employe=new Employe('Tarik','Zeroual',44);
employe.showEmploye();