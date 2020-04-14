var firstname;
var lastname;
var age;

function ask() {
    firstname = prompt("Введите свое имя");
    lastname = prompt("Введите свою фамилию");
    age = prompt("Введите свой возраст");
}

function say() {
    document.write('Имя ' + firstname + "<br />");
    document.write('Фамилия ' + lastname + "<br />");
    document.write('Возраст ' + age + "<br />");
    document.write("<hr/>")
}
do {
    ask();
    say();
    repeater = confirm("Пройти заполнение еще раз")
} while (repeater);
