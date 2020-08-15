//Procurar no Botão
    document.querySelector("#add-time")

//Quando clicar no botão
    .addEventListener('click',cloneField)

//Execiutar uma ação
    function cloneField(){
    
    //Duplicar campos. Que campos?
        const newFieldContainer=document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos.Que campos?
    
        const fields=newFieldContainer.querySelectorAll('input')

        fields.forEach(function(field){
            field.value=" "
        }) 

    //Colocar na página.Onde?
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

