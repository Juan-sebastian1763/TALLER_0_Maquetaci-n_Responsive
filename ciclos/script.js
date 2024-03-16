var escoje = prompt("Ciclos:  ");

switch (escoje) {
  case "1":
    //Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.?
    let suma = 0;

    for (let n = 1; n <= 10; n++) {
      let valor = parseInt(prompt("Ingrese un valor:"));
      if (n > 5) {
        suma += valor;
      }
    }

    document.write("La suma de los últimos 5 valores es:", suma);

    break;
  case "2":
    let numeroMultiplicador = parseInt(
      prompt("Ingrese un número del 1 al 10: ")
    );

    for (let i = 1; i <= 12; i++) {
      document.write(
        `${numeroMultiplicador} x ${i} = ${numeroMultiplicador * i}` + "<br/>"
      );
    }
    break;
  case "3":
    let numero = parseInt(prompt("Ingrese un número natural: "));
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }

    document.write(`El factorial de ${numero} es: ${factorial}`);
    break;
  case "4":
    let numeroCuenta = parseInt(
      prompt("Ingrese el número de cuenta (negativo para finalizar): ")
    );
    let sumaAcreedores = 0;

    while (numeroCuenta >= 0) {
      let nombreCliente = prompt("Ingrese el nombre del cliente: ");
      let saldoActual = parseFloat(prompt("Ingrese el saldo actual: "));

      let estadoCuenta;

      if (saldoActual > 0) {
        estadoCuenta = "Acreedor";
        sumaAcreedores += saldoActual;
      } else if (saldoActual < 0) {
        estadoCuenta = "Deudor";
      } else {
        estadoCuenta = "Nulo";
      }

      document.write(`- Cuenta: ${numeroCuenta}` + "<br>");
      document.write(`- Nombre: ${nombreCliente}` + "<br>");
      document.write(`- Saldo: $${saldoActual}` + "<br>");
      document.write(`- Estado de la cuenta: ${estadoCuenta}`);
      document.write();

      numeroCuenta = parseInt(
        prompt(
          "Ingrese el número de cuenta (numero negativo para finalizar la operación): "
        )
      );
    }

    document.write(`**Suma total de saldos acreedores: $${sumaAcreedores}`);

    break;
}
