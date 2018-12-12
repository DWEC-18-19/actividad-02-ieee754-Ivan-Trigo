'use strict';

function ieee754aBinario(numero) {
  	//Quitamos los corchetes si se han introducido.
    numero = numero.replace(/"/g,'');
    numero = numero.replace(/'/g,'');
	
	//Comprobamos el signo [0=+ y 1=-]
    var signo=0;
    if (numero<1){
        signo=1;
    }
	
	//Sacamos la parte entera del numero
    var numeroDecimal = Math.abs(parseFloat(numero));
    var entero = Math.trunc(numeroDecimal);
	
	//Sacamos la parte decimal del numero
    var decimal = numeroDecimal - entero;
	
	//Convertimos la parte entera en Binario
    var binario = binarioConvertir(entero);
	
	//Convetirmos la parte decimal en Binario
    var binarioDecimal = "";
    for(var i=1;i<21;i++){ 
            decimal = decimal*2;
            if(String(Math.trunc(decimal))==1) {
                binarioDecimal = binarioDecimal + "1"; 
                decimal= decimal - 1;
            }else {
                binarioDecimal = binarioDecimal + "0"; 
            }
    }
    
	//Unimos la parte entera y decimal del numero binario
    var numero_binario = binario + "." + binarioDecimal;

	//Calculamos el exponente
    var potencia = (numero_binario.toString().indexOf(".")-1)+127;
	
	//Convertimos el exponente en binario
    var exponente = binarioConvertir(potencia);
    
	//Sacamos la mantisa
    var mantisa = (numero_binario.replace(".", "")).substring(1, numero_binario.length);
    
    //Devolvemos el resultado
    var resultado = signo + " " + exponente + " " + mantisa;
    return resultado;     
}


//Metodo para convertir numeros enteros en binarios
function binarioConvertir(i){
    var numero;
    var binario = "";
    do { 
            numero=i/2; 
            if (i%2==0) { 
                binario = "0" + binario; 
            } 
            else { 
                binario = "1" + binario; 
            } 
            i=Math.floor(numero); 
    }while(i >= 1); 
    
    return binario;
}


