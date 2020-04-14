var builder = new Object();
builder.createRoof = function () {
    document.write("<img src='Roof.gif'/><br/>");
};
builder.createFirstFloor = function () {
    document.write("<img src='FirstFloor.gif'/><br/>");
};
builder.createSecondFloor = function () {
    document.write("<img src='SecondFloor.gif'/><br/>");
};
    builder.createBasement = function () {
    document.write("<img src='Basement.gif'/><br/>");
};

builder.createRoof();
builder.createFirstFloor();
builder.createSecondFloor();
builder.createBasement();
