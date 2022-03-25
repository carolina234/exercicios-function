//Crie uma função, sem parâmetros, que imprima no console a mensagem “Vou me comportar direitinho!”
function para() {
    console.log('vou me comportar direitinho!')
}
//aqui ela chama a funçao
para()

//Crie uma função, com um parâmetro chamado “x” e retorne o valor de 2 * x + 1;
function nomedafuncao(x) {
 
    return  (2 * x + 1)
}


//Crie uma função, com um parâmetro “x”, outro “y” e outro “z”, escreva no console o valor de x, de y e de z e 
//retorne o valor de x * y - y * z;
function contas(x, y, z) {
  console.log("x = " + x)  
  console.log("y = " + y)  
  console.log("z = " + z)  
  return  x * y - y * z
}

//Crie uma função que receba 2 argumentos (ex: a e b) e retorne o resto da divisão de a por b.
function restodadivisao(a, b){
  console.log("a =" + a)
  console.log("b =" + b)
  // o % seria o resto da divisao
    return a % b
}

//Crie uma função que receba 1 argumento (ex: n) e retorne seu valor ao quadrado (ou seja, “elevado à potência 2”)
//A função Math. pow() retorna a base elevada ao expoente power, ou seja, baseexpoente .4 de jun. de 2021
function elevado(m) {

 return Math.pow(m, 2)
}



//Crie uma função que receba 1 argumento (ex: n) e retorne sua raiz quadrada.
//A função SQRT retorna a raiz quadrada de um valor numérico
function aoquadrado(n){
    return   Math. sqrt(n)
}



//Crie uma função que receba 2 argumentos (ex: a e b) e retorne a raiz quadra da soma dos quadrados de a e b. (Ou seja… a raiz_quadrada( quadrado(a) + quadrado(b) )
function koala(a, b){
    console.log("a = " + a)
    console.log("b = " + b)
    return aoquadrado(elevado(a) + elevado(b))
}


//Faça uma função que recebe 2 parâmetros (ex: a e b) e retorne:
//1, se a for maior que b;
//0, se ambos números forem iguais;
//-1, se a for menor que b

function outra(a, b){
    if(a > b){
    const result = "1";
     return result
     
    } else if(a == b){
    return ("0"); 
    }
    else if (a < b){
    return ("-1");
    }
}
//Faça uma função que recebe 2 parâmetros (ex: a e b) e retorne:
//se o valor de a for par, retorne a;
//senão, se o valor de b for par, retorne b;
//senão, retorne o valor de a + b
function hott(a, b){
    // o %  seria o resto da divisao, e como numero par nao sobra numeros o resultado seria a
    if (a%2 === 0){
        return a;
    }
   
     else if (b%2 === 0){
        return b;
    }
    //se o resto de a nao for 0, some a + b
    else if(a%2 !== 0 && b%2 !== 0) {
        return a+b;
    }
     
}

//Faça uma função chamada bart_simpson que recebe um parâmetro n e chame n vezes a função criada 
//no exercício 1 da seção de Funções deste documento
function bart_simpson(n){
    var aaa = 0
while(aaa < n){
    para();
    aaa = aaa + 1
    
}

}

//Faça uma função que recebe um parâmetro n e retorne a soma de todos os números inteiros, de 1 até n.
//exemplo: para n = 4, o retorno deve ser 10
// nesse caso o h muda o valor de acordo com o n, ou seja ele soma  1+2+3+4+5... ate chegar o n 8(exemplo) 
// e na funçao a soma é 0 e o h é 1 sendo assim o h sempre vai somar com a soma e o h sempre vai somar +1 e sendo assim chegando ate o numero desejado

function last (n){
    var h = 1
    var soma = 0
    while(h <= n)  {
    soma = soma + h
    console.log(soma)
    h++
}
}
function lasty(n) {
    var soma = 0
    for (var h = 1; h <= n ; h++){
        soma = soma + h
        console.log(soma)
    }
}




//Faça uma função que recebe um parâmetro n e q e escreva na tela todos os números entre 0 e q que sejam divisíveis por n.exemplo: para n = 3 e q = 10, deve escrever 0, 3, 6 e 9.
function divisiveis(n,q){
var i = 0
while(i<=q){
    if(i%n == 0){
        console.log(i)
    }
    i++
}
}


//No código acima (que possui um comentário // loops, "laços" ), note que o 10não foi escrito. Por que ele não é escrito?
//porque a funcao é ate chegar ao 10, ou seja ira parar no 10, mostrando so ate o 9. Se no caso fosse i<=10 mostraria ate o 10.

//Faça uma função tabuada(n) que receba um número inteiro n e escreva noconsole a tabuada do número n. A “Tabuada” de um número n são 10 linhas onde se escreve o número n, o sinal de multiplicação (use x ou *, comopreferir), um outro número sequencial (primeira linha é 1, segunda linha é 2 eassim por diante, até 10), o sinal de igualdade (=) e o valor a multiplicação de npelo número sequencial.
function tabuad(n){
    for(i=1;i<=10;i=i+1){
        console.log(n*i)
    }

}






//Faça uma função divisivel(n, q) que receba dois parâmetros inteiros n e q e retorne true se o número n for divisível por q, e false caso contrário. Um número n é “divisível” por outro número q quando a divisão de n por q tem resto 0. Ou seja, quando n % q == 0. Exemplos de chamada da função:(12, 4) deve retornar true, pois 12 é divisível por 4;divisivel(9, 4) deve retornar false, pois 9 não é divisível por 4
function divisivel(n,q){
    if(n % q == 0){
         return true
         
        } else{
        return false; 
}
}

// Faça uma função ehPrimo(n) que receba um parâmetro inteiro n e retorne true se o número n for um número primo, e que retorne false caso contrário. Um número é chamado de “primo” quando possui apenas 2 divisores inteiros: 1 e elemesmo. São exemplos de números primos: 2, 3, 5, 7, 11, 13.
//Se o resto da divisão for zero o número não é primo.
function ehPrimo(n){
    for (let i = 2; i < n; i++)
    if (n % i === 0) {
      return false;
    }
  return n > 1;
};


