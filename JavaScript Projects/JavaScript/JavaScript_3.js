

//Step 239: HTML data attribute
function showDir(director) {
    var dirName = director.getAttribute('data-director-name');
    alert(dirName + " directed " + director.innerHTML)
}