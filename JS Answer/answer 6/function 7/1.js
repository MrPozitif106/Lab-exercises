function max (a,b,c) {
    console.log(arguments);
    var maxValue = Number.NEGATIVE_INFINITY;
    document.write("<p>Number.NEGATIVE_INFINITY = " +
    maxValue + "<hr/>");

    for (
        var i = 0;
        i < arguments.length;
        i++
    )
    if (arguments[i] > maxValue) maxValue = arguments[i];

    return maxValue;
}
var res = max(-33, 33, 777, -666, - 22, 888);
document.write("<p>Максимальное значение одногоиз аргументов функции = " + res);
