var human = new Object ();

human.firstName = "Alex";
human.secondName = "Jazum";
human.age = 27;

human.occupation = new Object();

human.occupation.company = "Microsoft";
human.occupation.position = "Web Developer";


document.write("<p>First name: " + human.firstname);
document.write("<p>Last name: " + human.lastname);
document.write("<p>Age: " + human.age + "years old");
document.write("<p>Company:" + human.occupation.company);
document.write("<p>Positipn:" + human.occupation.position);

