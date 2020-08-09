const Database = require ('sqlite-async') //importa o modulo do sqlite
//abre o banco de dados

function execute(db){
    //comandos do sql aqui
    //criar as tabelas do BANCO DE DADOS
   return db.exec(`
   CREATE TABLE IF NOT EXISTS proffys (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       
       name TEXT,
       avatar TEXT,
       whatsapp TEXT,
       bio TEXT
   );

   CREATE TABLE IF NOT EXISTS classes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    subject INTEGER,
    cost TEXT,
    proffy_id INTEGER
   );

   CREATE TABLE IF NOT EXISTS classes_schedule(
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    class_id INTEGER,
    weekday INTEGER,
    time_from INTEGER,
    time_to INTEGER

   );

   `)

}
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

