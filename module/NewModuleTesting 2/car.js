export default class Car {
    constructor(name,color,price,warranty){
        
    this.name=name;
    this.color = color;
     this.price = price;
     this.warranty = warranty;
    }
}

 function displayNewPrice(objcar,discount){
    console.log(`New price after decerament of ${discount} is = ${objcar.price - discount}`);
}
 function printColor(objcar){
    console.log(`the color of car is :- ${objcar.color}`);
}
 function printWarrantyYears(objcar){
    console.log(`No of years car has warranty is :- ${objcar.warranty}`);
}


export {printColor,printWarrantyYears, displayNewPrice};
