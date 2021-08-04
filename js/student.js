const student1 = {
  name: 'jane',
  id: 1,
}
const student2 = {
  name: 'john',
  id: 2,
}
const student3 = {
  name: 'jim',
  id: 2,
}

export let students = [student1, student2, student3]

export function renameMutable(students, oldName, newName) {}

export function renameImmutable(students, oldName, newName) {
  let copyOfStudent = [...students]
  copyOfStudent = students.forEach(student => {
    if (student.name === oldName) {
      student.name = newName
    }
  })
  return copyOfStudent
}
