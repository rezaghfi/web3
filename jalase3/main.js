// script languuge


// define function
function zarb(input){
  for (i = 1; i <= input; i++) {
    str = "";
    for (j = 1; j <= input; j++) {
      str = str + i * j + " ";
    }
    console.log(str);
  }
}


// call invoke صدا زدن
 zarb(6)

console.log("hello")
 zarb(7)

 zarb(8)


 // انواع تعریف توابع


 function a(){
  console.log("hello")
 }

 function b(input){
  console.log(input)
 }

a()

b(8)

function c(input1, input2){
  console.log(input1+ input2)
 }

 c(2,5)


 function d(input1, input2){
  return input1 * input2;
 }


 v = b(8)
 
 console.log(v)

 v = d(3,6)

 console.log(v)

 