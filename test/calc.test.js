const operations = require ('../calc');

test('soma 1 + 1 igual a 2', () => {
    expect (operations.sum(1,1)).toBe(2);
});

test ('subtracao 2 - 1 igual a 1', () =>{
    expect (operations.sub(2,1)).toBe(1);
});

test ('multiplicar 2 vezes 2 igual a 4', () =>{
    expect (operations.multiplicar(2,2)).toBe(4);
});

test ('divisao 4 por 2 igual a 2', () =>{
    expect (operations.dividir(4,2)).toBe(2);
});

test ('2 na potência de 2 é igual 4', () =>{
    expect (operations.potencia(2,2)).toBe(4);
});

