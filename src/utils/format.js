const subjects = [

    "Inglês",
    "Português",
    "Matemática",
    "História",
    "Biologia",
    "Física",
    "Química",
    "Educação Fisica",
    "Música",
    "Filosofia",
    "Programação",
    
    ]
    const weekdays = [
    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    
    ]
//FUNCIONALIDADES

function convertHoursToMinutes(time) {
//split separa as variaveis
 const [hour,minutes] = time.split(":")
 return Number((hour * 60)) + minutes
}

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports={
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}