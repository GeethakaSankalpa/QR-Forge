let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qr");        // image
let qrText = document.getElementById("qrText");     // input field

function generateQR(){

    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.ariaValueMax;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(()=> {
            qrText.classList.remove('error');
        }, 100)
    }
}