# Funcões de operadores de igualdade

## Operador ==
**Quando == é usado os valores poderão ser considerados iguais mesmo se forem de tipos diferentes.** 

### Caso 1:
```js
console.log('packt' == true)
```

- Primeiro o boleano é convertido para o tipo `Number`. Ou seja, seu valor seria `1`
- Depois a string `packt` é convertida para número, porém retorna `NaN` pois é 
construida com caracteres alphanuméricos.
- Assim fica `NaN == 1` sendo o resultado final como: `false`

### Caso 2:
```js
console.log('packt' == false)
```
- Primeiro o boleano é convertido para o tipo `Number`. Ou seja, seu valor é `0`
- Depois a string `packt` é convertida para número gerando um `NaN` por ser 
caracteres alphanuméricos.
- Assim fica `NaN == 0` sendo como resultado final: `false`

### Caso 3:

```js
var person1 = { name: 'John' };
var person2 = { name: 'John' };

console.log(person1 === person2); // false, objetos diferentes.
```

- Para este caso, como os objetos são diferentes, mesmo que tenham o mesmo valor, são objetos diferentes,
portanto o resultado é `false`
