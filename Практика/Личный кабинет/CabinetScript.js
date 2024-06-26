document.querySelector('input[type="file"]').onchange = event => {
    let reader = new FileReader();
    reader.onload = e => document.querySelector('img').src = e.target.result;
    reader.readAsDataURL(event.target.files[0]);

};

