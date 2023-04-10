function displayEmployeeDetail(id, name) {
    this.id = id, //this is needed for assign values into object
        this.name = name
}
let emp001 = new displayEmployeeDetail(412, "Warner");
console.log(emp001); //displayEmployeeDetail { id: 412, name: 'Warner' }
console.log("name" in displayEmployeeDetail); //true
console.log("Name" in displayEmployeeDetail); //false 
console.log("age" in displayEmployeeDetail); //false
console.log(typeof displayEmployeeDetail); //function
console.log(typeof emp001); //object

console.log("==================another way of above program is ===========");

class Student {
    constructor(id, name, isSrilankan) {
        this.id = id;
        this.name = name;
        this.isSrilankan = isSrilankan;
    }
    total() {
        console.log(this.id);
        console.log(this.name);
        return 10;
    }
    get name() {
        return this._name;
    }
    set name(value) {

        this._name = value;
    }
}


let stu001 = new Student(423, "Wanindu_Hasaranga", true);
console.log(stu001); //Student { id: 423, name: 'Hasaranga', isSrilankan: true }    
console.log(typeof Student); //function
console.log(stu001.total());