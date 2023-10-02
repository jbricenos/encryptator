var btnEncrypt = document.querySelector('#botonEncriptado');
    btnEncrypt.onclick = encrypt;

    var btnDecrypt = document.querySelector('#botonDesencriptado');
    btnDecrypt.onclick = decrypt;

    var btnCopy = document.querySelector('#botonCopiar');
    btnCopy.onclick = textCopy;