function tambah(){
    var a = parseFloat(document.calculator.a.value);
    var b = parseFloat(document.calculator.b.value);
    var total = a + b;
    document.calculator.total.value = total;
}
function kurang(){
    var a = parseFloat(document.calculator.a.value);
    var b = parseFloat(document.calculator.b.value);
    var total = a - b;
    document.calculator.total.value = total;
}
function kali(){
    var a = parseFloat(document.calculator.a.value);
    var b = parseFloat(document.calculator.b.value);
    var total = a * b;
    document.calculator.total.value = total;
}
function bagi(){
    var a = parseFloat(document.calculator.a.value);
    var b = parseFloat(document.calculator.b.value);
    var total = a / b;
    document.calculator.total.value = total;
}