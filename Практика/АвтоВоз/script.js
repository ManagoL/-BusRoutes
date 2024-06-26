let dialog = document.querySelector('.dialogPoz');
let reg = document.querySelector('#rigistra');
document.body.classList.remove('modal-open');
reg.addEventListener("click", ()=>{
    dialog.showModal()
    document.body.classList.add('modal-open');
})

var SVG = document.getElementsByClassName("close")[0];

SVG.addEventListener("click", () => {
    dialog.close() 
    document.body.classList.remove('modal-open');
  })


let dialogavto = document.querySelector('.dialogavto');
let avto = document.querySelector('#avto');

avto.addEventListener("click", ()=>{
    dialogavto.showModal()
    document.body.classList.add('modal-open');
})
var SVG1 = document.getElementsByClassName("close1")[0];

SVG1.addEventListener("click", () => {
    dialogavto.close() 
    document.body.classList.remove('modal-open');
  })


document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      document.body.classList.remove('modal-open');
    }
  });
