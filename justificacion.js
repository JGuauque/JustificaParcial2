var numero =0;
var suma =0;
var i=0
numero=parseInt(prompt("ingrese su numero"))

for (let i = 1; i < numero; i++) {
        if (numero % i == 0) {
            suma = suma + i;
        }
    }       
    
switch (true){
case(numero==suma):
    alert("el numero "+numero+" es un numero perfecto");
    break
case(numero!=suma):
    alert("el numero "+numero+" no es un numero perfecto");
    break
}
