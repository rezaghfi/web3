// بدست آوردن ایومین عدد دنباله فیبوناچی
function f1(i){
  if(i == 1  || i == 2){
    return 1
  }
  a1 = 1
  a2 = 1

  for(j=3;j<=i;j++){
    a3 = a1 + a2
    a1 = a2
    a2 = a3
  }
  return a3
}

function f2(i){
  if (i == 1 || i == 2){
    return 1
  }
  return f2(i-1) + f2(i-2)
}


function f3(){
  console.log(f4())
}

function f4(){
  return "reza"
}


/// OOP

// class
class Tree{
  kind = ""
  color = ""

  roshd(){
    console.log(this.kind + "is roshding")
  }
}

// instance or object
tomson = new Tree()
narengi = new Tree()

tomson.color = "green"
tomson.kind = "tomson"

narengi.color = "narengi"
narengi.kind = "yafa"
narengi.roshd()
