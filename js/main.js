let file = document.querySelector('.file');
let showFile = document.querySelector('.show-file');

const changeName = () => {
    showFile.placeholder = file.value;
}