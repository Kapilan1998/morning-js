let student={
    id:524,
    name:"raj",
    subject:{
        maths:85,
        tamil:82,
        english:90,
        total:function(){
            return this.tamil+this.maths+this.english;
        }
    }
};


console.log(student);                   // { id: 524, name: 'raj', subject: { maths: 85, tamil: 82, english: 90, total: [Function: total] } }                       
student.subject.english=80;
console.log(student);                   // { id: 524, name: 'raj', subject: { maths: 85, tamil: 82, english: 80, total: [Function: total] } }
let findTotal=student.subject.total();
console.log(findTotal);                     // 247
