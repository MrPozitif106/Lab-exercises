var house = {
    roof: "<img src ='Roof.gif'/><br/>",
    secondFloor: "<img src ='SecondFloor.gif'/><br/>",
    firstFloor: "<img src ='FirstFloor.gif'/><br/>",
    basement: "<img src ='Basement.gif'/><br/>",
    address: "<p style ='color:green'>UK. London. Muswell Hill. N10<hr/>"   
};

for (var element in house) {
    document.write(house[element]);
}

var arr = [];
var _ind = 0;
arr[0] = true;
arr[4] = 1;
arr[122] = 'people';
for (_ind in arr) {
    arr[3] = false;
console.log(_ind);
}

console.log(arr);