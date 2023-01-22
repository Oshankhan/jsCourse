//Object in js 
console.log("hello") 
var person1 = {
  name:"Oshan",
  number:"+91 - 941847990",
  Age: 21,
  Sex: "Male"
}

console.log(person1.name);
//Printing the Person ID using variable

intro=(Name, ID, Age,Sex)=>{
  
const person={
  name:Name,
  id:ID,
  age:Age,
  sex:Sex
}  
  console.log(person.name)
  console.log(`My name is ${person.name} his Age ${person.age} and Id is ${person.id}` )
}
intro("oshan",1,19,"Male")

