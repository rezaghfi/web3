class Animal{
  name = ""
  age = 1
  // method owner
  owner(){
    // h is object of human
    h = new Human()
    h.age = 30
    console.log(h.age);
    console.log(this.age)
  }
}


class Human{
  age = 1
}
// نمونه از حیوان
a = new Animal()
// نمونه از انسان
h = new Human()
// متد حیوان را صدا زدم
a.owner()
