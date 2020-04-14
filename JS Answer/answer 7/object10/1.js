var house = {
    roof: "<img src ='Roof.gif'/><br/>",
    secondFloor: "<img src ='SecondFloor.gif'/><br/>",
    firstFloor: "<img src ='FirstFloor.gif'/><br/>",
    basement: "<img src ='Basement.gif'/><br/>",
    address: "<p style ='color:green'>UK. London. Muswell Hill. N10<hr/>"   
};

if("roof" in house) {
    delete house.roof;
}
for (element in house) {
    document.write(house[element]);
}