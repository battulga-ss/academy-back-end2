
class Student {
  constructor(name, age) {
    this.name = name ? name : 0;
    this.age = age ? age : 0;
  }

  ages() {
    return this.age
  }
  names() {
    return  this.name
  }

  indtoduce(){
return  "hi my name is   " + this.name  + "   years old" +  this.age   
  
}



}


const student = new Student("bat", 16)

console.log(student.indtoduce())




