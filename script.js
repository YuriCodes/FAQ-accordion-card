const answers = document.getElementsByClassName('answers')
const arrows = document.getElementsByClassName('arrow')
const questions = document.getElementsByClassName("questions")

let timeOut = false;

let i
    
for (i = 0; i< questions.length; i++){
    questions[i].addEventListener("click", function(){
         // Toggle between adding and removing the "active" class
        this.classList.toggle("active") 
       //console.log(this)
        //toggle between hiding and showing the active 
    let panel = this.nextElementSibling
    
        if(panel.style.display === "block"){
        panel.style.display = "none"  
    }else {
        panel.style.display = "block"   
    }
    setTimeout(() => { 
        if(this.classList.contains('active')){
            this.classList.remove('active')
            panel.style.display = "none"
        }
    },5000)

})
}



