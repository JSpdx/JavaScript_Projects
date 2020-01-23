



//Step 87: KVP dictionary
function my_dictionary() {
    pc = {
        graphics_card : "GTX1070",
        cpu :  "core i7 9700k",
        ram  :  "2x16GB DDR4 3200MHz",
        storage  :  "Samsung SSD 970 EVO 1TB M.2",
        storage : "sdfsdf"
    };
    delete pc.storage;
    document.getElementById('dictionary').innerHTML = pc.storage;
}