const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName)
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has a higher 
    }

  }

}

const jared = new Student('jared', 'arambula', 'software developer', 3.5);


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
