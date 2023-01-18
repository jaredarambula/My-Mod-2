
const Employee = require(`./employee`);

const john = new Employee('John Wick', "Dog Lover");

const sayNameBound = john.sayName.bind(john)

setTimeout(john.sayName, 2000);






