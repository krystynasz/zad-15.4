const array = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstName, , lastName] = array; 

document.write(`${firstName} ${lastName}`)