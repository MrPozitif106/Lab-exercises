var house = {
    roof: "<img src ='Roof.gif'/><br/>",
    secondFloor: "<img src ='SecondFloor.gif'/><br/>",
    firstFloor: "<img src ='FirstFloor.gif'/><br/>",
    basement: "<img src ='Basement.gif'/><br/>",
    address: "<p style ='color:green'>UK. London. Muswell Hill. N10<hr/>"   
};

document.write(house.roof);

if("thirdFloor" in house) {
    document.write(house["thirdFloor"]);
}
else
{
    document.write(house["secondFloor"]);
}
document.write(house.secondFloor);
document.write(house.firstFloor);
document.write(house.basement);
document.write(house.address);