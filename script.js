let imgBox = document.getElementById("imgBox");     // gets image Box element
let qrImage = document.getElementById("qr");        // gets QR image
let qrText = document.getElementById("qrText");     // gets input field

// Generates a QR code based on the input text
function generateQR(){

    // Checks if the input text is not empty
    if(qrText.value.length > 0){
        // Sets the src attribute of the qrImage element to the QR code API URL with the input text as a parameter
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.ariaValueMax;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(()=> {   // Removes the error class after 100ms
            qrText.classList.remove('error');
        }, 100)
    }
}