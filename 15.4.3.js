const average = (...theArgs) =>
  document.write(theArgs.reduce((a,b) => a + b, 0) / theArgs.length + '<br>');

average(4,8,9);
average (1,2);
average (2,4,6,8)