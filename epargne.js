const cotisationsemaine = 4000;
const objectif = 50000;

let semaine = 0;
let epargne = 0;

while (epargne < objectif) {
    semaine++;
    epargne += cotisationsemaine;
    console.log(`Semaine ${semaine}: Epargne = ${epargne} FCFA`);
}

console.log(`Objectif atteint en ${semaine} semaines avec une épargne totale de ${epargne} FCFA.`);