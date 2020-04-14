var person = {
    firstname: "Jim",
    lastname: "Rainbow",
    age:30,
    occupation: "Web Developer"
}

document.write("<p>" + person.firstname + " " + person.lastname);

person.age = 35;
document.write("<p>Age:" + person.age + "years old.")