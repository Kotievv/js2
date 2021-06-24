const name = "intocode bootcamp";
const nameLetters = name.split(");
console.log(nameLetters)

const words = name.split('');
console.log(words);

// ⚠️ Нельзя напрямую писать эти значения, они должны определяться
//   с помощью соответствующих методов.

// выведи в консоль последнюю букву переменной name. 
console.log(name[name.length -1]);

// выведи в консоль второе слово переменной name
console.log(words[1]);

// добавь в конец массива words любое слово
const arr = words.push('kot')
console.log(words);

// добавь в начало массива nameLetters четыре новых 
// элемента 't', 'h', 'e' и ' '. Последний элемент это пробел.
nameLetters.unshift('t', 'h', 'e', ' ',);
console.log(nameLetters);