"use strict"
const formAdd = document.querySelector('#addProdForm');
const openFormBtn = document.querySelector('#openFormBtn');



openFormBtn.addEventListener('click', () => {
    toggleHide(formAdd);
});


function closeForm() {
    document.getElementById("addInvForm").style.display = "none";
}


//this changes parameter's style to either block or none(visible or not)
const toggleHide = function(btn) {
    if (btn.style.display === 'block') {
        btn.style.display = 'none';
    } else {
        btn.style.display = 'block';
    }
}