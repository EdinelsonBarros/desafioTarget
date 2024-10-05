let fiboResult;
let num = 3524579;
fibonums = [0, 1]

function fibcontains(){

            for(let i = 0; i <= 50; ){
                  fiboResult = fibonums[i] + fibonums[i+1]
                  fibonums.push(fiboResult)
                  i++
            }
            console.log(fibonums)

            if (fibonums.includes(num)){
                  console.log(`O número: ${num} pertence a sequência de Fibonacci.`)
            } else {
                  console.log(`O número: ${num} não pertence a sequência de Fibonacci.`)
            }
      }

fibcontains()

