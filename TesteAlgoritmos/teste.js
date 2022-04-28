// 1) Implemente um método que crie um novo array baseado nos valores passados.Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

const tripleA = (number,letter) =>{
    let count = 0;
    let newArr =[];
    while(count < number){
        newArr.push(letter)
        count++
   };
    return newArr;
};

console.log('Exercicio 1:', tripleA(3,'a'));

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

const reverseArray =(array)=>{
    let newArr=[];
    for(let i = array.length - 1; i >= 0;i--){
        newArr.push(array[i]);
    };
    return newArr;
};

console.log('Exercicio 2:',reverseArray([1,2,3,4]));

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

const cleanArr = array =>{
    let clean = array.filter(element => {
        if(element !== undefined || element !== false || element !== '' || element !== 0 || element !== null ){
            return element;
        };
    });

    return clean;
};

console.log('Exercicio 3:', cleanArr([1,2,'', undefined]));

//4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

const objConvert = (array) =>{
    let map = new Map(array);
    const obj = Object.fromEntries(map);

    return obj;
};

console.log('Exercicio 4:', objConvert([["c",2],["d",4]]));

//5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

const paramElim = (array,num1,num2) =>{
    let newArr = [];
    for(let i = 0 ; i < array.length;i++){
        if(array[i] !== num1 && array[i] !== num2){
            newArr.push(array[i])
        };
    };
    return newArr;
}

console.log('Exercicio 5:',paramElim([5,4,3,2,5], 5,3));

//6) Implemente um método que retorne um array, sem valores duplicados.Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

const uniqueNumbers = (array) =>{
    let unique = [...new Set(array)];

    return unique;
};

console.log('Exercicio 6:', uniqueNumbers([1,2,3,3,2,4,5,4,7,3]));

//7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

const sameArray = (array1,array2) =>{
    let x;
    for(let i = 0; i < array1.length;i++){
        if(array1[i] == array2[i]){
            x = true;
        }else{
            x = false;
        };
    };
    return x;
};

console.log('Exercicio 7:',sameArray([1,2,3,4],[1,2,3,4]));

//8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

const oneArr = (array) =>{
    let newArr = array.flat();
    return newArr;
};

console.log('Exercicio 8:',oneArr([1, 2, [3], [4, 5]]));

//9) Implemente um método divida um array por uma quantidade passada por parâmetro.Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

const doubleValueArr = (array,num) => {
    let newArr=[];
    for(let i = 0; i < array.length;i++){
     newArr.push(array.slice(i,i+num))
     i++;
    };
    return newArr;
};

console.log('Exercicio 9:',doubleValueArr([1, 2, 3, 4, 5], 2));

//10) Implemente um método que encontre os valores comuns entre dois arrays.Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

const sameValue = (array1,array2) =>{
    let sameVal = 0;
    for(let i = 0 ; i < array1.length;i++){
        sameVal = array1[i];
        if(sameVal === array2[i]){
            sameVal = array2[i]
        };
    };
    return [sameVal];
};

console.log('Exercicio 10:', sameValue([6, 8], [8, 9]));