const inputValue = document.querySelector('.input-value')

const listItems = document.querySelector('.items')



const button = document.querySelector('.click')

button.addEventListener('click', function(){
    //create an li in the document

    const newLi = document.createElement('LI')
    const liContent = document.createTextNode(inputValue.value)
    

    //add input value inside an li

   newLi.appendChild(liContent)
    

    //attatch li to the item list

    listItems.appendChild(newLi)
})
