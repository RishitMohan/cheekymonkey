const closedEye=document.querySelector('.see-no-evil');
const openEye=document.querySelector('.hear-no-evil');
const closedMouth=document.querySelector('.speak-no-evil');

closedEye.addEventListener('click',()=>{
    // if(openEye.classList.contains('open')){
        closedMouth.classList.add('active');
        closedEye.classList.remove('active');
    // }
});

openEye.addEventListener('click',()=>{
    // if(closedEye.classList.contains('closed')){
        closedEye.classList.add('active');
        openEye.classList.remove('active');
    // }
});

closedMouth.addEventListener('click',()=>{
    // if(closedEye.classList.contains('closed')){
        openEye.classList.add('active');
        closedMouth.classList.remove('active');
    // }
})


