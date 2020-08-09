module.exports = async function(db, {proffyValue,classValue,classScheduleValues }){
     //inserir dados na table de professores
     //o async faz o await funcionar na função
     const insertedProffy = await db.run(`
     INSERT INTO proffys(
         name,
         avatar,
         whatsapp,
         bio
     )VALUES(
         "${proffyValue.name}",
         "${proffyValue.avatar}",
         "${proffyValue.whatsapp}",
         "${proffyValue.bio}"

     );     
     `)
const proffy_id = insertedProffy.lastID
 
//Inserir dados na tabela classes 
const insertedClass = await db.run(`
INSERT INTO classes (
    subject,
    cost,
    proffy_id
)VALUES(
    "${classValue.subject}",
    "${classValue.cost}",
    "${proffy_id}"
);
`)
const class_id=insertedClass.lastID

//inserir dados na tabela class_schedule
//mapeia o ARRAY por nao saber quantos valores de horas e dias o array ira conter

const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) =>{

    return db.run(`
    INSERT INTO classes_schedule (
        class_id,
        weekday,
        time_from,
        time_to

    )VALUES(

        "${class_id}",
        "${classScheduleValue.weekday}",
        "${classScheduleValue.time_from}",
        "${classScheduleValue.time_to}"

    );

`)
})

//executar todos os db.runs() das classes schedules
await Promise.all(insertedAllClassScheduleValues)

}