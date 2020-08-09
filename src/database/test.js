const Database = require('./db')
const createProffy= require('./createProffy')


Database.then(async(db) => {
//inserir dados

proffyValue={
    name:"Vitor Lucas",
    avatar:"https://avatars1.githubusercontent.com/u/68614036?s=460&u=8c7fb9980ec4d5ef2e931110bb84db3c00f7c615&v=4",whatsapp:"65566522",
    bio:"Mestre em errar o famoso ; mas apaixonado em Programação<br><br>Venha aprender o basico de c++ e a logica de programação comigo,bora????",
  
}
classValue = {


subject:1,
cost:"40",
}
classScheduleValues = [
    //class_id virá pelo bando ,apos cadastro a class

    { 
    weekday:1,
    time_from:720,
    time_to:1220
    },
    {
     weekday:0,
    time_from:520,
    time_to:1220
    }
]
//cria os dados 

//await createProffy (db, {proffyValue,classValue,classScheduleValues} )



//consultar os dados inseridos


//todos os proffys * = TUDO
const selectedProffys = await db.all("SELECT *  FROM proffys")

const selectClassesAndProffys= await db.all(`SELECT classes.*,proffys.*
FROM proffys
JOIN classes ON (classes.proffy_id=proffys.id)
WHERE classes.proffy_id = 1;
`)
//console.log(selectClassesAndProffys)

const selectClassesSchedules = await db.all(`

SELECT classes_schedule.*
FROM  classes_schedule
WHERE classes_schedule.class_id=1
AND classes_schedule.weekday="0"
AND classes_schedule.time_from <= "520"
AND classes_schedule.time_to> "1300"

`)
console.log(selectClassesSchedules)

})