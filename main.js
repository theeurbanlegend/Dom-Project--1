const startBtn=document.getElementById("start-btn")
const modalContainer=document.querySelector("#modal-container")
const closeBtn=document.querySelector("#close-btn")

startBtn.addEventListener('click', ()=>{
    modalContainer.style.display="block"

})
closeBtn.addEventListener('click', ()=>{
    modalContainer.style.display="none"

})
window.addEventListener('click', function (e){
 let target=e.target
    if(target===modalContainer){
        modalContainer.style.display="none"
    }

})



