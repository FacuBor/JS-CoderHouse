// bienvenido
function Ingreso (){
    const year = 2023;
    let nameUser = prompt ("Escriba su nombre");
        while (nameUser == ""){
            alert ("Campo vacio, escriba su nombre por favor.");
            nameUser = prompt ("Escriba su nombre");
        };
    let surname = prompt ("Escriba su apellido");
        while (surname == ""){ 
            alert ("Campo vacio, escriba su apellido por favor.");
            surname = prompt ("Escriba su apellido");
        };
    let dateOfBirth = parseInt(prompt ("Año de nacimiento"));
        while (isNaN (dateOfBirth)){
            alert ("Ingresaste un valor no numerico, por favor corrija");
            dateOfBirth = parseInt(prompt ("Año de nacimiento"))
        };
    let age = year - dateOfBirth;
    let userData = `Hola ${nameUser} ${surname}, segun mis calculos tenes ${age} años`;
    alert (userData);
    alert ("Hasta luego!")
}


// clima
function clima (){
    let clima = prompt ("Como esta el clima en tu ciudad (Caluroso, Lluvioso, Frio)");
        while (clima == "") {
            alert ("Campo vacio");
            clima = prompt ("Como esta el clima en tu ciudad (Caluroso, Lluvioso, Frio)")
        };
        switch (clima) {
            case "caluroso": {
                alert ("Mantente Hidratado!")
                break;
            }
            case "lluvioso":{
                alert ("Si salis, lleva paraguas!")
                break;
                }
            case "frio": {
                alert ("mantente abrigado, tomando algo caliente!")
                break;
                }
            default :{
                alert ("Dato erroneo, Mire por la ventana, y vea su clima")
                }
            alert ('Good luck!')
            }
}



// ingreso bar
function ingresoBar () {
    let edad = parseInt (prompt("ingrese su edad"))
        while (isNaN (edad)){
            alert ("Por favor ingrese numeros");
            edad = parseInt (prompt("ingrese su edad"))
            }
        if (edad <21){
            alert ("Usted no cumple con el rango de edad");
            alert ("Eres muy pequenio");
            }
        else if (edad <=30){
            alert ("Cumple con el rango de edad, puede ingresar");
            alert ("Bienvenido");
            }
        else  {
            alert ("usted sobrepasa el rango de edad")
            alert ("Good luck!")
        };
}



// casa de cambio
function casaCambio() {
    let values = parseInt (document.getElementById("valor").value) 
    let result = 0;
    let dolar = 380;
    let euro = 404;
        if (document.getElementById ("uno").checked){
            result = values / dolar;
            alert ("Su cambio es US$ "+result);
        }
        else if (document.getElementById("dos").checked){
            result = values / euro;
            alert ("Su cambio es EUR€ "+result);
        }
        else {
            alert ('Seleccione la moneda e ingrese un monto')
        };
}

    



