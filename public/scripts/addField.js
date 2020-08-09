//Procura o botao
document.querySelector('#add-time').addEventListener('click',cloneField)
//quando clicar no botão



function cloneField(){
    //duplicar campos
   const newFielConteiner=document.querySelector('.schedule-item').cloneNode(true) //cloneNode recebe valor booleano

    //limpar os campos
    const fields= newFielConteiner.querySelectorAll('input')
   //para cada campo,limpar
   fields.forEach(function(field){
       //pegar o field do momento e limpa
       field.value=""
   })
//colocar na pagina
document.querySelector('#schedule-items').appendChild(newFielConteiner)
}