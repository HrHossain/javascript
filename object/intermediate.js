function Animal(name){
    this.name = name
    
}

Animal.prototype.speak = function (){
    console.log(`${this.name} makes sound`)
}


function Dog(name,breed){
    Animal.call(this,name)
    this.breed = breed
}

 Dog.prototype = Object.create(Animal.prototype)
 Dog.prototype.constructor = Dog

const dog = new Dog("kutta","infant")
console.log(dog.prototype.speak())

const obj = {
    name:"akbar",
    profession:"film maker",
}
Object.defineProperty(obj,'age',{
    value:new Date().getFullYear()- 1998,
    writable:false,
    enumerable:false,
    configurable:false
})
