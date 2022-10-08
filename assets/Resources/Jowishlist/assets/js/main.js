
// =================Loader=====================

onload = () => {
    const load =document.getElementById('load')
    setTimeout(() =>{
        load.style.display='none'
    },963)

    
}

function loader(){
    const load =document.getElementById('load')
    setTimeout(() =>{
        load.style.display='none'
    },963)
}


/*==================== DARK LIGHT THEME ====================*/ 
const themeswitchButton = document.querySelectorAll('.theme-switcher')
const themeswitch = document.querySelector('.theme-switcher')

themeswitchButton.forEach(button => {

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
    const getCurrentswitchIcon = () => themeswitch.classList.contains(iconTheme) ?'ri-moon-line' : 'ri-sun-line'
    
    // We validate if the user previously chose a topic
    if (selectedswitchTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedswitchTheme === 'dark' ? 'add' : 'remove'](darkswitchTheme)
      themeswitch.classList[selectedswitchIcon === 'ri-moon-line' ? 'add' : 'remove'](iconswitchTheme)
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
    load.style.display='block'
    loader()
    
    setTimeout(() => {
        document.querySelector('.creator').style.display = 'none'
        document.querySelector('.result').style.display = 'block'
        updater()
    }, 720);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1800,
            timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Successfully Created '
    })
    document.querySelector('.swal2-popup').style.background = '#1b1a1a'
    document.querySelector('.swal2-popup').style.color = 'white'
    document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
    document.querySelector('.swal2-success-circular-line-left').style.background = '#1b1a1a' 
      document.querySelector('.swal2-success-circular-line-right').style.background = '#1b1a1a' 
      document.querySelector('.swal2-success-fix').style.background = '#1b1a1a' 

     

    
})


const editor = document.querySelector('.editing-pdf')


editor.addEventListener('click', () => {
    load.style.display='block'

    loader()
    setTimeout(() => {
        document.querySelector('.creator').style.display = 'block'
        document.querySelector('.result').style.display = 'none'
        
        
    }, 369);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1800,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
          icon: 'info',
          title: 'Data Retrived '
        })
        
        document.querySelector('.swal2-popup').style.background = '#1b1a1a'
        document.querySelector('.swal2-popup').style.color = 'white'
        document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
        
    })
    
function updater(){
    const listTitleData = document.getElementsByClassName('home__title')
    
    const listDescriptionData = document.getElementsByClassName('details')
    
    let listTitle = []
    for(let i of listTitleData){
        listTitle.push(i.value)
    }
    let listDescription = []
    for(let i of listDescriptionData){
        listDescription.push(i.value)
    }

    const dropContent = document.querySelector('#final-items')   
    let dropData = ""
    for(var i = 0; i<listTitle.length; i++){
        dropData = dropData + `
                        <div class="drop__card">
                                
                        <div class="drop__data">
                            <div>
                                <h1 class="drop__name"><i class="ri-star-line"></i> ${listTitle[i]}</h1>
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



var windowHeight = window.innerHeight;
document.body.style.height = windowHeight + "px";




let areaCv = document.querySelector('html')

let resumeButton = document.querySelector('.downloadfile')

let opt = {
    margin:       -1.5,
   
    filename:     'WishList.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' },
    enableLinks: true,
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    
  };


function generateResume(){
    html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', () => {
    document.querySelector('.resultcontrols').style.transform = 'scale(0)'
    document.querySelector('.resultdrop').style.marginTop = '3rem'


    generateResume()
    setTimeout(() => {
        reverseControls()
    }, 3900);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3639,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Download Initiated'
      })
      document.querySelector('.swal2-popup').style.background = '#1b1a1a'
      document.querySelector('.swal2-popup').style.color = 'white'
      document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
      document.querySelector('.swal2-success-circular-line-left').style.background = '#1b1a1a' 
      document.querySelector('.swal2-success-circular-line-right').style.background = '#1b1a1a' 
      document.querySelector('.swal2-success-fix').style.background = '#1b1a1a' 

      
})
function reverseControls(){
    document.querySelector('.resultcontrols').style.transform = 'scale(1)'

}


