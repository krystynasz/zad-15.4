const average = (...theArgs) =>
  document.write(theArgs.reduce((a,b) => a + b, 0) / theArgs.length + '<br>');

const grades1 = [1, 5, 5, 5, 4, 3, 3, 2, 1]
average(...grades1)

const grades2 = [1, 5]
average(...grades2)

const grades3 = [1, 5, 3]
average(...grades3)