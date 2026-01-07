class Student{
    #cgpa 
    constructor(name,age,phone){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.#cgpa = null
    }

    get studentName(){
        return this.name
    }
    set studentName(value){
         if(value.length > 2){
            return this.name
        }
    }
    get studentAge(){
        return this.age
    }
    set studentAge(value){
         this.age = value
    }
    get studentPhone(){
        return this.phone
    }
    set studentPhone(value){
         if(value.length === 11){
            this.phone = value
         }
    }
    set cgpa(point){
        if(point >= 0 && point <=4){
            this.#cgpa = point
        }
    }
    get cgpa(){
        return this.#cgpa
    }

    getStudentInfo() {
        return `
        Name: ${this.name}
        Age: ${this.age}
        Phone: ${this.phone}
        CGPA: ${this.#cgpa}
        `
    }
}

const student = new Student("mofazzel hossain",15,"01855513852")
student.studentPhone = "01855513866"
student.cgpa = 3.75



class Guardian{
    constructor(name,phone,student){
        this.name = name;
        this.phone = phone;
        this.student = student
    }
}

const guardian = new Guardian("Abdul malek","01236735235",student)
guardian.student.cgpa = 2.34
console.log(guardian.student.getStudentInfo())