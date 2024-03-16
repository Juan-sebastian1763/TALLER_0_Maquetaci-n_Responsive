var ejercicio = prompt("Escoje el ejericio que quieres ejecutar");

switch (ejercicio) {
  case "1":
    // Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.

    let numero = prompt("Digita el numero ");
    if (numero > 0) {
      document.write("El numero " + numero + " es positivo");
    } else if (numero == 0) {
      document.write("El numero es CERO, digita un nuevo numero");
    } else {
      document.write("El numero " + numero + " es negativo");
    }
    ///////////////////////////////////////////////////////////////////////
    break;

  case "2":
    // Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor.

    let numero1 = prompt("Digita el primer numero ");
    let numero2 = prompt("Digita el segundo numero ");

    if (numero1 > numero2) {
      document.write("El numero (" + numero1 + ") es el mayor ");
    } else if (numero2 > numero1) {
      document.write("El numero (" + numero2 + ") es el mayor ");
    } else if (numero1 == 0 && numero2 == 0) {
      document.write("Los dos numeros tienen valor de CERO");
    } else {
      document.write("Los dos numeros son los mismos");
    }
    ///////////////////////////////////////////////////////////////////////
    break;

  case "3":
    // Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos.

    let primerNumero = prompt("Digita el primer numero positivo ");
    let segundoNumero = prompt("Digita el segundo numero positivo");
    let tercerNumero = prompt("Digita el tercer numero positivo");

    //numero mayor:
    if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
      document.write("El numero mayor es " + primerNumero);
    } else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
      document.write("El numero mayor es " + segundoNumero);
    } else {
      document.write("El numero mayor es " + tercerNumero);
    }

    //Numero menor:
    if (primerNumero < segundoNumero && primerNumero < tercerNumero) {
      document.write("El numero menor es " + primerNumero);
    } else if (segundoNumero < primerNumero && segundoNumero < tercerNumero) {
      document.write("El numero menor es " + segundoNumero);
    } else {
      document.write("El numero menor es " + tercerNumero);
    }
    ///////////////////////////////////////////////////////////////////////
    break;

  case "4":
    //¡La abuela tiene horno nuevo! y ha planeado hacer una deliciosa torta de vainilla con relleno de crema y fresas.? La receta dice que debe precalentar el horno a 350 °F (grados fahrenheit), pero su horno muestra la temperatura en °C (grados Centígrados). Ayúdale a la abuela a colocar la temperatura correcta. Cree un programa en JavaScript que convierta de grados Fahrenheit (°F) a Centígrados (°C), teniendo en cuenta lo siguiente:

    //Formula C=(F - 32) / 1.8

    let gradosF = prompt(
      "Digita ls grados en el que se encuentra tu horno en Fahrenheit"
    );

    let gradosC = ((gradosF - 32) * 5) / 9;
    document.write(
      "La temperatura del horno en grados centigrados es: " + gradosC
    );
    ///////////////////////////////////////////////////////////////////////
    break;

  case "5":
    let operacionARealizar = prompt(
      "Ingresa la operacion con la que deseas interactuar, SUMA, RESTA, MULTIPLICACION, DIVISION, "
    );
    let indicePrimerNumero = prompt("Ingresa el primer digito para operar");
    let indiceSegundoNumero = prompt("Ingresa el primer digito para operar");
    switch (operacionARealizar) {
      case "suma":
        let resultSuma =
          Number(indicePrimerNumero) + Number(indiceSegundoNumero);
        document.write("El resultado de la operacion es: " + resultSuma);
        break;
      case "resta":
        let resultResta =
          Number(indicePrimerNumero) - Number(indiceSegundoNumero);
        document.write("El resultado de la operacion es: " + resultResta);
        break;
      case "multiplicacion":
        let resultMultiplicacion =
          Number(indicePrimerNumero) * Number(indiceSegundoNumero);
        document.write(
          "El resultado de la operacion es: " + resultMultiplicacion
        );
        break;
      case "division":
        let resultDivision =
          Number(indicePrimerNumero) / Number(indiceSegundoNumero);
        document.write("El resultado de la operacion es: " + resultDivision);
        break;
      default:
        alert("ingresa una operacion valida");
        break;
    }
  ///////////////////////////////////////////////////////////////////////
  case "6":
    //De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:?
    //Nivel superior: Porcentaje>=90%.?
    //Nivel medio: Porcentaje>=75% y <90%.?
    //Nivel regular: Porcentaje>=50% y <75%.?
    //Fuera de nivel: Porcentaje<50%.

    let numeroDeterminadoPreguntas = 100;
    let nombreAspirante = prompt("Ingresa tu nombre: ");
    let numerPreguntasCorrectas = prompt(
      "Ingresa el numero de preguntas correctas: "
    );
    let nivel;

    if (numerPreguntasCorrectas >= 90) {
      nivel = "superior";
      document.write(
        "señ@r " +
          nombreAspirante +
          ", el resultado de la prueba realizada en la cual se hicieron " +
          numeroDeterminadoPreguntas +
          " preguntas fue de: " +
          nivel
      );
    } else if (numerPreguntasCorrectas >= 75 && numerPreguntasCorrectas < 90) {
      nivel = "medio";
      document.write(
        "señ@r " +
          nombreAspirante +
          ", el resultado de la prueba realizada en la cual se hicieron " +
          numeroDeterminadoPreguntas +
          " preguntas fue de: " +
          nivel
      );
    } else if (numerPreguntasCorrectas >= 50 && numerPreguntasCorrectas < 75) {
      nivel = "regular";
      document.write(
        "señ@r " +
          nombreAspirante +
          ", el resultado de la prueba realizada en la cual se hicieron " +
          numeroDeterminadoPreguntas +
          " preguntas fue de: " +
          nivel
      );
    } else {
      nivel = "Fuera de nivel";
      document.write(
        "señ@r " +
          nombreAspirante +
          ", el resultado de la prueba realizada en la cual se hicieron " +
          numeroDeterminadoPreguntas +
          " preguntas fue de: " +
          nivel
      );
    }
    ///////////////////////////////////////////////////////////////////////
    break;

    ///////////////////////////////////////////////////////////////////////
    break;
    document.write("OPERACION NO VALIDA, INTENTA NUEVAMENTE");
  default:
    break;

  case "7":
    let numeroUnoP = 10;
    while (numeroUnoP <= 6) {
      console.log("numero" + numeroUnoP);
      numeroUno++;
    }

    break;


}
