import {Personne} from './Personne';

let personne=new Personne();
personne.setNom('ZEROUAL');
personne.setPrenom('Tibari');
personne.setAge(50);
console.log('===============affiche info Personne=======================');
personne.showPersonne();
console.log('===============================Après modification=======================');
personne.setNom('Boudarga');
personne.setPrenom('BACHA');
personne.setAge(60);
personne.showPersonne();


