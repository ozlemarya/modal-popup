const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector(".modal");
const form = document.querySelector('form');
// open modal
openBtn.addEventListener('click', openModal);
function openModal(){
    modal.style.display = 'grid';
}
// close modal
closeBtn.addEventListener('click', closeModal);
function closeModal() {
    
    modal.classList.add('close-modal-animation');
    setTimeout(() => {
        modal.style.display= 'none';
        window.location.reload();
    }, 500);
}
modal.addEventListener('click', function(e) {
    if(e.target.classList.contains('modal')){
        closeModal(); }
    
})

form.addEventListener('submit' , submitForm);
function submitForm(){
    const card = document.querySelector('.card');
    card.innerHTML = "<h2>Thanks for your subscription </h2>";
    setTimeout(() => {
    closeModal ();
    }, 3000)
}