input = 5;

for (i = 1; i <= input; i++) {
  str = "";
  for (j = 1; j <= input; j++) {
    str = str + i * j + " ";
  }
  console.log(str);
}
