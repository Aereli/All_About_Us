const createStudent = (firstName, lastName, age, gender, favoriteLanguage, mood) => ({
  firstName, lastName, age, gender, favoriteLanguage, mood
})

const students = []

students.push(createStudent("Andy", "Weiss", 36, "male", "JavaScript", "Friyay"))
students.push(createStudent("Laz", "Q", 33, "Male", "Javascript", "Objectified"))
students.push(createStudent('James', 'Kemp', 23, 'male', 'JavaScript', 'alrightalrightalright'))
students.push(createStudent("William", "Kennedy", 27, "male", "JavaScript", "stressed"))
students.push(createStudent("Gustavo", "Abdelnour", 24, "male", "Python", "Focused"))
students.push(createStudent('Emilio','Izquierdo',33,'male','Javascript','Excited'))
students.push(createStudent("Josue", "Vargas", 46, "male", "SQL", "ah"))
students.push(createStudent("Daniel", "Perez", 19, "male", "Javascript", "Saturday"))
students.push(createStudent('Andres', 'Mejias', 25, 'male', 'JavaScript', 'Friyay'))
students.push(createStudent("Rob", "Terrell", 26, "male", "JavaScript", "YABOYYYY"))
students.push(createStudent("Andres", "Urdaneta", 26, "male", "JavaScript", "Beer"))
students.push(createStudent("Valiana", "Josic", 28, "Female", "JavaScript", "Happyyy"))
students.push(createStudent("Andrew", "Chunis", 22, "male", "JavaScript", "Super"))
students.push(createStudent("Jen", "Jordan", 36, "female", "CSS", "determined"))
students.push(createStudent("Nico", "Quintero", 31, "male", "CSS", "TGIF"))
students.push(createStudent("Jean", "De Castro", 35, "Male", "html", "Freacking Out People"))
students.push(createStudent("Brendan", "Guralsky", 22, "male", "javascript", "Lit"))
students.push(createStudent("Jun", "Su", 29, "female", "JavaScript", "whatever"))
students.push(createStudent("Pitney", "Jules", 29, "male", "JavaScript", "Yippeeeeeeeee"))
students.push(createStudent("Daniel", "Ulerio", 30, "male", "JavaScript", "Amazing"))
students.push(createStudent("Alexia", "Panameno", 31, "female", "Html", "Hungry"))
students.push(createStudent("Eric", "Oyanadel", 29, "male", "Javascript", "Happy"))
students.push(createStudent("Maryali", "Rondon", 26, "female", "JS", "hungry"))
students.push(createStudent("Cristhian",  "Fernandez",  25, "male", "SQL", "hungry"))
students.push(createStudent("Genny", "Moise", 38, "Female", "Javascript", "Exhausted"))

// sort students by last name

students.sort((student1, student2) => {
  if (student1.lastName.toLowerCase() < student2.lastName.toLowerCase()){
    return -1
  }else if (student1.lastName.toLowerCase() === student2.lastName.toLowerCase()){
    return 0
  }else {
    return 1
  }
})

document.querySelector('#sorted-last-name > tbody').innerHTML = students.map(student => (
  `
  <tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td>${student.gender.charAt(0).toUpperCase()}</td>
    <td>${student.favoriteLanguage}</td>
    <td>${student.mood}</td>
  </tr>
  `
)).join('')

// filter on age < 30
// then sort on age
const youngins  = students
                    .filter(student => student.age < 30)
                    .sort((a,b) => a.age - b.age)

document.querySelector('#youngins > tbody').innerHTML = youngins.map(student => (
  `
  <tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td>${student.gender.charAt(0).toUpperCase()}</td>
    <td>${student.favoriteLanguage}</td>
    <td>${student.mood}</td>
  </tr>
  `
)).join('')


// console.log(youngins)

// const sortedMoods = students.map(student => student.mood).sort()
// console.log(sortedMoods)

// const sumOfAllAges  = students.reduce((runningTotal, student) => runningTotal += student.age, 0)
// console.log(sumOfAllAges)

// CHALLENGE:

// Sort students by last name
// students.sort((student1, student2) => {
//   if (student1.lastName.toLowerCase() < student2.lastName.toLowerCase()){
//     return -1
//   }else if (student1.lastName.toLowerCase() === student2.lastName.toLowerCase()){
//     return 0
//   }else {
//     return 1
//   }
// })

// console.log(students)

// All the ladies

// const ladies = students.filter(student => student.gender.toLowerCase().startsWith('f') )
// console.log(ladies)

// Just the fellas
// const fellas = students.filter(student => student.gender.toLowerCase().startsWith('m') )
// console.log(fellas)
// const studentGender = students.filter(student => student.gender === 'female' || student.gender === 'Female')

// List of favorite Languages

// const favoriteLanguages = students.map(student => student.favoriteLanguage.toUpperCase())
// console.log(Array.from(new Set(favoriteLanguages)))

// BONUS
// Average Age

const averageAge = students.reduce((runningTotal, student) => runningTotal += student.age, 0) / students.length

document.querySelector('#average-age').textContent = `The average age of the students is ${averageAge}!`

// console.log(averageAge)

// Most Common mood

const moodCount = {}

students.forEach(student => {
  if( moodCount[student.mood.toLowerCase()] ){
    moodCount[student.mood.toLowerCase()] += 1
  }else{
    moodCount[student.mood.toLowerCase()] = 1
  }
})

let highestCount = 1
let mostCommonMood = null

for (let mood in moodCount){
  if(moodCount[mood] > highestCount){
    highestCount = moodCount[mood]
    mostCommonMood = mood
  }
}

document.querySelector('#most-common-mood').textContent = `The most common mood is ${mostCommonMood}!`


// console.log(mostCommonMood)


