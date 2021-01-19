// reduce 
//                   que retorna                    extrao o paramentro recibe
// forEach              nada                       recibe como parametro c/elemento del array,indice,array//todos
// map                  nuevo array               lo que yo retorne sera un elemento del nuevo array
// filter                nuevo array                lo que yo retorne es la condicion que deben cumplir los nuevos elements del array 
// every                 booleano                   retorno la condicion que deben cumplr los elementos 
// some                 boolean                     retorno la condicion que debe cumplir al menos un elemento 
// find                  un elemento                encontrar el primer elemento que cumple una condicion 

// todos estos elementos comparten , en paramentros se les puede poner elemento ,index y array


// ej array.map((elemento,index,array)=>{

// }

// REDUCE

// reduce recibe dos paramentros ( una funcion , otra cosa/(no es obligatoria))
// reduce recibe dos parametros: una funcion y OTRA COSA 
// la funcion de reduce tiene dos parametros obligatorios: acumuladora y valorActual
// retorna un solo valor, definido por mi

// ej Array.reduce((acumuladora,valorActual)=>{f},otraCosa)

// const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let acumuladora = 0
// for (let i = 0; i < notas.length; i++) {
//   console.log("acumuladora", acumuladora)
//   console.log("nota actual", notas[i])
//   acumuladora += notas[i]
// }

// console.log(acumuladora)

// acumuladora =cuando queremos retornar algo que no es constante
// reduce recibe dos parametros: una funcion, y el valor inicial de la acumuladora
// esa funcion recibe a su vez, dos parametros: la acumuladora y el valorActual
// la acumuladora inicia en el valor que especificamos, y valor Actual inicia en el primer elemento del array
// en cada vueta, la acumuladora es lo que retorne en la vuelta anterior
// y valorActual es el actual elemento del array
// reduce retorna el ultimo valor de la acumuladora 

// const numbers = [6, 1, 34, 94, 3, 17];




/******************SINTAXIS */
// const resultadoDelReduce = numbers.reduce((acumuladora, valorActual) => {
//   console.log("----")
//   console.log("acumuladora", acumuladora)
//   console.log("valorActual", valorActual)
//   return acumuladora * valorActual
// }, 1)

// console.log(resultadoDelReduce)



// reduce permite tener la variable acumuladora dentro de la funcion osea dentro de su scope 
// no es necesario declararla afuera pra que no se reinicie

// los parametros que recibe son una funcion y el valor inicial de la acumuladora


// const nombres = [{
//         nombre: "Caro",
//         edad: 12
//     },
//     {
//         nombre: "Maca",
//         edad: 25
//     },
//     {
//         nombre: "Ana",
//         edad: 105
//     },
// ]

// const resultado = nombres.reduce((acc, curr) => {
//     console.log("acc", acc)
//     console.log("curr", curr)
//     return acc + curr.nombre
// }, '')

// console.log(resultado)



// Tenemos un array llamado numbers con números enteros al azar.

// Utilizando reduce, queremos calcular la suma de todos los números que están en el array.
// // Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
// const numbers = [6, 1, 34, 94, 3, 17];

// // codea debajo de este comentario la solucion al ejercicio

// const suma = numbers.reduce((acumuladora, item) => {
//     return acumuladora + item
// }, 0)

// console.log(suma)


// deberia mostrar 155


/**************************************** */


// Tenemos un array llamado numbers con números enteros al azar.
// Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio


const multiplicar = numbers.reduce((acumuladora, item) => {
    return acumuladora * item
})

console.log(multiplicar)

// deberia mostrar 977976