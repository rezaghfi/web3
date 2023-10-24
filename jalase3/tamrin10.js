input = 444

sum = 0

while(input > 10){
  // جمع ارقام اعداد ورودی هر گام حلقه
  while(input > 0){
    tmp = input % 10
    sum += tmp
    input = Math.floor(input / 10)
  }
  input = sum
}

console.log(sum)