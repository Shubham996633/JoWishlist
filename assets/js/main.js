/*==================== DARK LIGHT THEME ====================*/ 
const themeswitchButton = document.querySelectorAll('.theme-switcher')

themeswitchButton.forEach(button => {
    console.log(button)

    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
    const darkswitchTheme = 'dark-theme'
    const iconswitchTheme = 'ri-sun-line'
    
    // Previously selected topic (if user selected)
    const selectedswitchTheme = localStorage.getItem('selected-switch-theme')
    const selectedswitchIcon = localStorage.getItem('selected--switch-icon')
    
    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentswitchTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentswitchIcon = () => button.classList.contains(iconTheme) ?'ri-moon-line' : 'ri-sun-line'
    
    // We validate if the user previously chose a topic
    if (selectedswitchTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedswitchTheme === 'dark' ? 'add' : 'remove'](darkswitchTheme)
      button.classList[selectedswitchIcon === 'ri-moon-line' ? 'add' : 'remove'](iconswitchTheme)
    }
    // Activate / deactivate the theme manually with the button
    button.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkswitchTheme)
        button.classList.toggle(iconswitchTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentswitchTheme())
        localStorage.setItem('selected-icon', getCurrentswitchIcon())
    })
})
const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
    const darkswitchTheme = 'dark-theme'
    const iconswitchTheme = 'ri-sun-line'
    
    // Previously selected topic (if user selected)
    const selectedswitchTheme = localStorage.getItem('selected-switch-theme')
    const selectedswitchIcon = localStorage.getItem('selected--switch-icon')
    
    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentswitchTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentswitchIcon = () => button.classList.contains(iconTheme) ?'ri-moon-line' : 'ri-sun-line'
    
    // We validate if the user previously chose a topic
    if (selectedswitchTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedswitchTheme === 'dark' ? 'add' : 'remove'](darkswitchTheme)
      button.classList[selectedswitchIcon === 'ri-moon-line' ? 'add' : 'remove'](iconswitchTheme)
    }






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
        i -= 1
        if(i === 0){
            i = 1
        }
    }
    changeValue()
    
}

function changeValue (){
    const totalContainer = document.querySelectorAll("#new__drop")
    if(totalContainer.length === 0){
        document.querySelector('.delete').disabled = true

    }else if (totalContainer.length > 0){
        document.querySelector('.delete').disabled = false

        const inputContainer = document.querySelector(`.dropItem${totalContainer.length}`)
        const textareaContainer = document.querySelector(`.dropItem${totalContainer.length}`)
        const inputvalue = inputContainer.querySelector('input')
        const textareavalue = textareaContainer.querySelector('textarea')
        inputvalue.value = ""
        textareavalue.value = ""
    }

}



document.querySelector('.addmore').addEventListener('click', duplicate)

document.querySelector('.delete').addEventListener('click', deleteDrop)
function deleteDrop(){
    const totalContainer = document.querySelectorAll("#new__drop")
    
    
    if(totalContainer.length === 0){
        document.querySelector('.delete').disabled = true

    }else if((totalContainer.length > 0)){

        const deleteItem = document.querySelector(`.dropItem${totalContainer.length}`)
        deleteItem.parentNode.removeChild(deleteItem)
    }
    

}