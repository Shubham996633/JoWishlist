// ======= DRAG and DROP =======
const dropItems = document.getElementById('drop-items')
const finalItems = document.getElementById('final-items')


new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen",
    swapClass: 'highlight',
    dragClass: "sortable-drag",
    
});


new Sortable(finalItems, {
    animation: 350,
    chosenClass: "sortable-chosen",
    swapClass: 'highlight',
    dragClass: "sortable-drag",
    
});

const genrator = document.querySelector('.generate-pdf')
genrator.addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.creator').style.display = 'none'
        document.querySelector('.result').style.display = 'block'
        
    }, 639);
    updater()
})


const editor = document.querySelector('.editing-pdf')


editor.addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.creator').style.display = 'block'
        document.querySelector('.result').style.display = 'none'
        
    }, 639);
    
})

function updater(){
    const listTitleData = document.getElementsByClassName('home__title')
    
    const listDescriptionData = document.getElementsByClassName('details')
    
    let listTitle = []
    for(let i of listTitleData){
        listTitle.push(i.value)
        console.log(i.value)
    }
    let listDescription = []
    for(let i of listDescriptionData){
        listDescription.push(i.value)
        console.log(i.value)
    }

    const dropContent = document.querySelector('#final-items')   
    let dropData = ""
    for(var i = 0; i<listTitle.length; i++){
        dropData = dropData + `
                        <div class="drop__card">
                                
                        <div class="drop__data">
                            <div>
                                <h1 class="drop__name">${listTitle[i]}</h1>
                                <span class="drop__profession">${listDescription[i]}</span>
                            </div>
                        </div>
                    </div>
        
                        ` 
    }

    dropContent.innerHTML = dropData
}


var i = 1;
var original = document.querySelector('.drop__card-creator');

function duplicate() {
    var clone = original.cloneNode(true); 
    
    clone.id = `new__drop`
    clone.className = `drop__card dropItem${i}` 
    
    
    original.parentNode.appendChild(clone);
   
    i++;
    document.querySelector('.delete').onclick = () => {
        console.log('clicked')
        i -= 1
        if(i === 0){
            i = 1
        }
        console.log(i)
    }

    const allInput = document.querySelectorAll('.home__title')
    allInput.forEach(input => {
        console.log(input.value)
        
    })
    console.log(document.querySelectorAll('.home__title'))
}



document.querySelector('.addmore').addEventListener('click', duplicate)

document.querySelector('.delete').addEventListener('click', deleteDrop)
function deleteDrop(){
    const totalContainer = document.querySelectorAll("#new__drop")
    
    
    console.log(totalContainer.length)
    if(totalContainer.length === 0){
        console.log('No More Additional Dialogs')
    }else if((totalContainer.length > 0)){

        const deleteItem = document.querySelector(`.dropItem${totalContainer.length}`)
        deleteItem.parentNode.removeChild(deleteItem)
    }
    
    

    


}