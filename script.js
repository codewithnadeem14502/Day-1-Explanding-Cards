const panels = document.querySelectorAll('.panel');

//  console.log(panels)

panels.forEach( panel=>{
    // event listinor when click run the loop
    panel.addEventListener('click',() =>{
         // fucntion that remove all panel active 
        removeActiveClasses()
        panel.classList.add('active')
    })
   
   
} )

function removeActiveClasses()
    {
      panels.forEach(panel => {
           panel.classList.remove('active')
        })
    }