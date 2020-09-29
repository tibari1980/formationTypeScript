//tsc Client.ts && node Client.js
//affichage resultat
class Client{
     private lName:string;
     private Lprenom:string;
     private adresse:string;
     private age:number;
     private isActive:boolean;
    constructor(cName:string,cPrenom:string,cAdresse:string,Cage:number,Cisactive:boolean){
       this.lName=cName;
       this.Lprenom=cPrenom;
       this.age=Cage;
       this.adresse=cAdresse;
       this.isActive=Cisactive;
    }
    
    getNom(){
        return this.lName;
    }
    setNom(sNom:string){
        this.lName=sNom;
    }
    getPrenom(){
        return this.Lprenom;
    }
    setPrenom(sPrenom:string){
        this.Lprenom=sPrenom;
    }
    getAdresse(){
         return this.adresse;
    }
    setAdresse(sAdress:string){
        this.adresse=sAdress;
    }
    getIsActive(){
        return this.isActive;
    }
    setIsActive(sIsActive:boolean){
        this.isActive=sIsActive;
    }

    afficherClient(){
        console.log('Nom : '+this.lName+ ' Prénom :'+this.Lprenom +' Adresse :'+this.adresse+' Age :'+this.age+' Active :'+this.isActive);
    }
}

//Creation d'un client
let client:Client;
client=new Client('zeroual','tibari','11 place des alpes 78280 guyancourt',40,true);
client.afficherClient();
console.log('========================Utilisation Setter And Getter =========================');
client.setNom('Boudarga');
client.setPrenom('Bacha');
client.afficherClient();
