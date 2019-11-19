
///Add a method to the Person's prototype called "isLegalDriver" that returns true if the person is 16 or older.

function Person(name, age) {
this.name = name;
this.age = age;


}
Person.prototype.isLegalDriver = function(){
  let a = this.age;
  
  if(a >= 16) return true;
  if(a< 16) return false;
}



/* Do not modify code below this line */

const youngPerson = new Person('Jane', 15);
console.log(youngPerson.isLegalDriver(), '<-- should be false');

const olderPerson = new Person('Joan', 16);
console.log(olderPerson.isLegalDriver(), '<-- should be true');