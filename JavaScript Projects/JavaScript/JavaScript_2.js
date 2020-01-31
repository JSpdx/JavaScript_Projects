

//Step 218: Form Validation
function validateForm() {
    var x = document.forms['nameForm']['firstname'].value;
    if (x == '') {
        alert('Name must be filled out');
        return false;
    }
}
