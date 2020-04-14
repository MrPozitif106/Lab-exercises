var human = {
    firstname: "Alex",
    secondname: "Jazum",
    age: 27,

    occupation: "<img src = 'Microsoft.png' width='152' height ='38'/> ",

    show: function () {
    document.write("<p>First name: " + human.firstname);
    document.write("<p>Last name: " + human.secondname);
    document.write("<p>Age: " + human.age + "years old");
    document.write(this.occupation + "<hr/>");
    },

    changeWork: function (occupation) {
        this.occupation = occupation;
    }
}

human.show();
human.changeWork("<img src = 'Microsoft.png' width='152' height ='38'/> ");
human.show();
