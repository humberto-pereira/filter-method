  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];


let oldEnough = people.filter(person => person.age >= 21)
console.log(oldEnough)

//array
const paul = people.filter(person => person.name === 'Paul')
console.log(paul)

//object
const paulObject = people.filter(person => person.name === 'Paul')[0]
console.log(paulObject)

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student =>  student.skills.filter(has5yearsExp).length > 0; // length > 0 filter empty arrays that is generated by yrsExperience > 5 like Ariel object...
    
const candidates = students.filter(hasStrongSkills);
console.log(candidates)

const extractName = candidate => [candidate.name];

const names = candidates.map(extractName);
console.log(names);



// Using map to extract name and results into new array structure
//let [john, ...rest] = students.map(extractNameAndResults);