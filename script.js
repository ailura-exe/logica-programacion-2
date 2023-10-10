function conversionTemperatura(){
    let temperatura=document.getElementById("temperatura").value;
    let celcius=parseFloat(temperatura);


    if(isNaN(temperatura)){
        alert("El valor ingresado no es un valor númerico, intente de nuevo");
        document.getElementById("temperatura").value = "";
        return;
    }
    let kelvin=celcius+273.15;
    let farenheit=(celcius*(9/5))+32;
    
    let resultados=document.getElementById("resultado");
    resultados.innerHTML="Grados Celsius: " + celcius + "<br>" + "Grados Fahrenheit: " + farenheit + "<br>" + "Kelvin: " + kelvin;
    document.getElementById("temperatura").value = "";
    
    
          
    
}
