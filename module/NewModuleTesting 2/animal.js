export default class Animal{
    constructor(species, gender, weight,height){
        this.species=species;
        this.gender=gender;
        this.weight = weight;
        this.height = height;
    }
}

function displaySpecies(a1){
    console.log(`It is a ${a1.species}`);
}
function displayGender(a1){
    console.log(`It is ${a1.gender} type.`);
}

 function displayWeight(a1){
    console.log(`It's weight is ${a1.weight} kg`);
}

export {displaySpecies, displayGender, displayWeight};