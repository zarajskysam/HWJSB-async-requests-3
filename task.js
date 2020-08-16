const uploadForm = document.getElementById("form");
const uploadButton = document.getElementById('send');
const progress = document.getElementById('progress');


uploadButton.addEventListener('click', uploadFile);

function uploadFile(event) {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', (event) => {
        const processValue = event.lengthComputable ? (event.loaded / event.total) : 0;
        progress.value = processValue.toFixed(2);
    })
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(new FormData(uploadForm));
}
