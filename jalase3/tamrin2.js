a = 3
b = 4
c = 5
tmp1 = 0
tmp2 = 0

if(a>=b && a>=c){
  tmp1 = b*b + c*c
  tmp2 = a * a
}else if(b>a && b>c){
  tmp1 = a*a + c*c
  tmp2 = b*b
}else{
  tmp1 = a*a + b*b
  tmp2 = c * c
}


if(a== b|| a==c || b==c){
  console.log("no")
}else if(tmp1 == tmp2){
  console.log("yes")
}
else{
  console.log("no")

}