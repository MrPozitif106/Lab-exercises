var human = {
    firstname: "Alex",
    lastname: "Jazun",
    age: 27,
    occupation: {
        company: "ZIEIT",
        position: "Teacher"
    },
    occupation1: {
        company: "Microsoft",
        position: "Web Developer"
    }
};
document.write("<p>First name: " + human.firstname);
document.write("<p>Last name: " + human.lastname);
document.write("<p>Age: " + human.age + "years old");
document.write("<p>Company:" + human.occupation.company);
document.write("<p>Positipn:" + human.occupation.position);
document.write("<p>Occupation1:" + human.occupation1);

