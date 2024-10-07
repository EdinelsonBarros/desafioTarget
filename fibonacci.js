let fiboResult;
let num = 3524579;
fibonums = [0, 1]

function fibcontains(){

            for(let i = 0; i <= 50; ){
                  fiboResult = fibonums[i] + fibonums[i+1]
                  fibonums.push(fiboResult)
                  i++
            }

            if (fibonums.includes(num)){
                  console.log(`O número: ${num} pertence a sequência de Fibonacci.`)
            } else {
                  console.log(`O número: ${num} não pertence a sequência de Fibonacci.`)
            }
      }

fibcontains()

/*
      Fiz a primeira resolução para o problema, mas fiquei martelando na cabeça que 
      tinha uma forma melhor de resolver este problema, na qual qualquer número pudesse 
      ser incluído e decomposto pela própria sequência de Fibonacci até 0 se fosse da 
      sequência ou até um número menor do que zero se não fosse.
*/


let fiboResult2;
let results = 10;
let num2 = 4182;
fibonums2 = [0, 1]

function fibcontains(){
            num - 1
            for(let i = 0; results > 0; ){
                  
                  fiboResult = fibonums[i] + fibonums[i+1]
                  fibonums.push(fiboResult)
                  i++
                  results = num - fibonums[i+1]
            }



            if (results == 0){
                  console.log(`O número: ${num} pertence a sequência de Fibonacci.`)
            } else {
                  console.log(`O número: ${num} não pertence a sequência de Fibonacci.`)
            }
      }

fibcontains()

