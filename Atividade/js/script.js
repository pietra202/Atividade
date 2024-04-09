const exercicio1 = () => {
  document.getElementeById("repostas"),
    (innerHTML = "<h2>Reposta da Atividade</h2>");
  for (let i = 1; i <= 10; i++) {
    document.getElementeById("resposta").innerHTML == `#${i}`;
  }
};

//-----------------------------------------------------------------------
const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  if (num <= 0) {
    error.innerText = `informar número valido, o número ${num} não é positivo`;
    result.innerText = "";
  } else {
    error.innerText = "";
    let primo = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }

    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (error.innerText = `O número ${num} não é primo`);
  }
};

//-----------------------------------------------------------------
//ATIVIDADE 4

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerHTML = "";

  if (num < 0) {
    error.innerHTML = "Número informado negativo!";
  } else {
    for (let i = 0; i <= 10; i++) {
      result.innerHTML += `${num} x ${i} = ${num * i}<br>`;
    }
  }
};

//--------------------------------------------------------------

//1- solicitar ao usuario um numero
//2- calcular todos os numeros entre o 0 e o numero escolhido
//3- separar os numeros impares dos pares, deixando somente os impares
//4- usar o while nos numeros impares
//5- apresentar os numeros
//6- limparia a resposta para que entre outro numero

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";
  if (num < 0) {
    error.innerText = `número negativo!😢`;
  } else {
    let i = 0;
    while (i <= num) {
      if (i % 2 != 0) result.innerText += `#${i} `;
      i++;
    }
  }
};

//-------------------------------------------------------------
//
//1- solicitar numero
//2- separar numeros pares e impares
//3- somar os numeros pares entre 0 e o numero escolhido
//4- apresentar a soma dos numeros
//5- limpar a resposta

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let i = 0;
  let soma = 0;
  while (i <= num) {
    soma += i;
    i += 2;
  }
  result.innerText = soma;
};

//----------------------------------------------------------

//exercicio7
//1- separar os numeros entre 1 a 10
//2- expecificar o maior e menor numero usando while
//3- colocar em ordem decrescente

//------------------------------------------------------------

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inverse = "";

  for (let i = 1; i <= palavra.length; i++) {
    inversa += palavra.charAt(palavra.length - i);
  }

  palavra.toLowerCase() == inversa.toLowerCase()
  ? (result.innerText = "A palavra é um palíndromo!")
  : (error.innerText = "A palavra não é um palíndromo!");
}
//-------------------------------------------------------------

//exercicio9
//1-organizar e separar os numeros entre 1 e 100
//2-somar os numeros de 1 a 100
//3-apresentar a soma

//--------------------------------------------------------------

//exercicio10
//1- solicitar um número maior que 0
//2- separar os numeros até o numero escolhido em ordem crescente
//3- somar todos os numeros 
//4- dividir pelo numero de digitos 
//5- apresentar a soma 
//6- limpar o resultado para por outro numero

//---------------------------------------------------------------

//exercicio11
// 1- separe e organize os numeros de 1 a 100
// 2- calcule os que são multiplos de 3
// 3- separar os multiplos dos demais numeros 
// 4- apresentar os numeros
//----------------------------------------------------------------

//exercicio12
// 1- solicitar um numero 
// 2- separar o numero de 0 ao numero escolhido
// 3- somar os numeros entre 0 ao numero escolhido
// 4- apresentar a soma
// 5- limpar o resultado
//------------------------------------------------------------

//exercicio13
// 1- solicitar um primeiro numero
// 2- solicitar um segundo numero diferente
// 3- calcular a diferença entre eles 
// 4- calcular os numeros primos entre eles
// 5- apresentar a soma
// 6-limpar o resultado
//----------------------------------------------------------------

//exercico14
// 1- solicitar um primeiro numero
// 2- solicitar um segundo numero diferente
// 3- multiplicar os dois números
// 4- apresentar o resultado em m²
// 5- apagar o resultado
//------------------------------------------------------------

//exercicio15
// 1- solicitar palavra
// 2- calcule as vogais da palavra
// 3- calcule as consoantes da palavra 
// 4- apresente as vogais e consoantes separadas
// 5- limpar resultado
//-------------------------------------------------------------

//exercicio16
// 1- solicitar um numero maior que 0
// 2- transformar o numero do raio ao ²
// 3- calcular PI * r²
// 4- apresentar o resultado da apresentar
// 5- limpar o resultado
//----------------------------------------------------------

//exercicio17
// 1- solicitar o numero da base
// 2- solicitar o numero da altura
// 3- multiplicar a base e a altura
// 4- mostrar resultado e multiplicar por 2
// 5- apresentar resultado 
// 6- limpar o resultado
//-------------------------------------------------------------

//exercicio18
// 1- solicitar base maior
// 2- solicitar base menor
// 3- solicitar altura
// 4- somar a base maior com a base menor
// 5- multiplicar o resultado pela altura
// 6- dividir o resultado por dois
// 7- apresentar o resultado
// 8- limpar o resultado
//------------------------------------------------------------

//exercicio19
// 1- solicitar data de nascimento
// 2- analisar data 
// 3- estabelecer ano atual
// 4- subtrair data atual da data do usuario
// 5- apresentar resultado
//---------------------------------------------------

//exercicio20
// 1- solicitar palavra 
// 2- separar letras
// 3- inverter ordem das letras
// 4- apresentar resposta
// 5- apagar resposta
//----------------------------------------------------------

//exercicio21 
// 1- solicitar frase
// 2- analisar frase e espaços em branco
// 3- juntar frase 
// 4- remover espaços em branco 
// 5- apresentar resultado 
// 6- limpar resultado 
//-----------------------------------------------------

//exercico22
// 1- solicitar numero 
// 2- separar os numeros entre 0 e o numero escolhido
// 3- somar os digitos
// 4- se for > que 100 mostrar o resultado
// 5- se for < que 100 não mostrar o resultado 
// 6- limpar resultado 
//-----------------------------------------------------------

//exercicio23
// 1- solicitar uma frase
// 2- separar palavras
// 3- analisar quais se repetem
// 4- separar a que mais se repetir
// 5- isolar a que mais se repetem
// 6- mostrar a que mais se repete como resposta
// 7- limpar a resposta
//-------------------------------------------------------

//exercicio24
// 1- solicitar frase 
// 2- separar palavras dentro da frase
// 3- remover as letras iniciais
// 4- trocar por letras maiusculas
// 5- apresentar resposta
// 6- limpar resultado
//--------------------------------------------------------------

//exercicio25
// 1- solicitar primeiro numero
// 2- soicitar segundo numero
// 3- solicitar terceiro numero
// 4- separa numeros 
// 5- colocar em ordem crescente
// 6- apresentar resultado
// 7- limpar resposta
