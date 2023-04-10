class CreateEmployee{
    constructor(id,name,isMarried,city){
        this.id=id;
        this.name=name;
        this.isMarried=isMarried;
        this.city=city;
    }

    get getName(){
        return this._name;
    }
    set setName(newName){
        this._name=newName;
    }

    get getSalary(){
        return this.salary;
    }
    set setSalary(newSalary){
        this._salary=newSalary;
    }

    displayDetail(){
        console.log("Employee id :- "+this.id);
        console.log("Employee name :- "+this.name);
        console.log("Is employee married :- "+this.isMarried);
        console.log("Employee city :- "+this.city);

    }
}

let emp1 = new CreateEmployee(4500,"Kumar",false,"Kondavil");
emp1.displayDetail();
console.log(emp1);             // CreateEmployee { id: 4500, name: 'Kumar', isMarried: false, city: 'Kondavil'}
console.log(emp1.isMarried);            // false
emp1.setName="Kokulan";
console.log(emp1.getName);                 // Kokulan
 console.log(emp1._name);                // Kokulan
 console.log(emp1.name);                // Kumar

console.log(emp1);       // CreateEmployee { id: 4500, name: 'Kumar', isMarried: false, city: 'Kondavil', _name: 'Kokulan'}

emp1.setSalary=50000;
console.log(emp1);       // CreateEmployee { id: 4500, name: 'Kumar', isMarried: false, city: 'Kondavil', _name: 'Kokulan', _salary: 50000}



