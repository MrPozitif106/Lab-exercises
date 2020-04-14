var OK = "Тетя Эльза чувствует себя хорошо. \n";
var Problem = 'Тетя Эльза заболела.\n';
function getDate() {
    var today = new Date();
    return today.toLocaleString() + '\n';
}
function CheckRadio(form, value) {
    if(value == 'Good') form.Letter.value = getDate() + OK;
    else form.Letter.value = getDate() + Problem;
}