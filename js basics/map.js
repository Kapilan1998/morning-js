let m=new Map();
console.log(m);                 //Map(0) {}
console.log(typeof m);              //object
m.set('fname','Kumar');
m.set('lname','Amalan');
console.log(m);                 //Map(2) { 'fname' => 'Kumar', 'lname' => 'Amalan' }

console.log(m.get('lname'));    //Amalan

m.set('age',25);
m.set('isAlive',true);
m.set('weight',85.32)
console.log(m.has('age'));      //true
console.log(m.has('Age'));      //false

console.log(m);            // Map(5) {'fname' => 'Kumar','lname' => 'Amalan', 'age' => 25,'isAlive' => true, 'weight' => 85.32 }
m.delete('weight')
console.log(m);        // Map(5) {'fname' => 'Kumar','lname' => 'Amalan', 'age' => 25,'isAlive' => true }

/*
console.log(m.size);    //4
m.clear();              
console.log(m.size);    //0
*/

/*
console.log(m.keys());          // [Map Iterator] { 'fname', 'lname', 'age', 'isAlive' }
console.log(m.values());        // [Map Iterator] { 'Kumar', 'Amalan', 25, true }
console.log(m.entries());       //  [Map Entries] { [ 'fname', 'Kumar' ], [ 'lname', 'Amalan' ],  [ 'age', 25 ],[ 'isAlive', true ] }
*/

for(let key of m.keys()){
    console.log(key);               
}
                            // fname
                            // lname
                            // age
                            // isAlive

for(let value of m.values()){
    console.log(value);               
}
                                // Kumar
                                // Amalan
                                // 25
                                // true

for(let entry of m.entries()){
    console.log(entry);               
}
                                    // [ 'fname', 'Kumar' ]
                                    // [ 'lname', 'Amalan' ]
                                    // [ 'age', 25 ]
                                    // [ 'isAlive', true ]



let map1 = new Map([
    ['first_name','lasith'],
    ['last_name','malinga'],
    ['city','galle'],
    ['role','bowler'],
    ['age',48],
    ['isAlive',true]
]);

for(let [k,v] of map1.entries()){
    console.log(`${k} :-  ${v}`);
}

                    // first_name :-  lasith
                    // last_name :-  malinga
                    // city :-  galle
                    // role :-  bowler
                    // age :-  48
                    // isAlive :-  true


let sports = ["cricket", "netball","volleyball"];
console.log(sports);
// using map function to modify values inside array
let newSports = sports.map(allItems => "New item : "+allItems);     //arrow function
console.log(newSports); 

// spread operator (...) is for array and object
// rest operator (...) is for functions
 let entertainment = [...sports,"cooking","reading"];       // ... operator (spread) is used to copy values 
 console.log(entertainment);

 function showAll(...elements){         // rest operator (...) is used to capture all values
    return elements;
 }
 console.log(showAll("kapilan", 2000, false,56.17,'b'));
