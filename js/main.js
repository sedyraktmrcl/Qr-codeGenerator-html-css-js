const container = document.querySelector(".container");
QrInputForm = container.querySelector(".form input");
 generatebtn = container.querySelector(".form button");
QrCodeImg = container.querySelector(".qr_code img");


generatebtn.addEventListener('click', ()=>{
    let Qrvalue = QrInputForm.value;
    if(!Qrvalue) return ;
    generatebtn.innerText = "Generate Qr code...";
    QrCodeImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${Qrvalue}`;
    QrCodeImg.addEventListener("load", ()=>{
        container.classList.add('active');
        generatebtn.innerText = "Generate Qr code...";
    })
})
QrInputForm.addEventListener("keyup", ()=>{
    if(!QrInputForm.value){
    container.classList.remove("active");
    }
})
