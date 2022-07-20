//funcion validar tarjeta
function validateCreditCard (creditCardNumber) {
    
  //tomamos el valor que ingresa y lo volvemos un array (.split), y volvemos el numero en reversa, 
  // y los volvemos cada numero en numero entero 
  let arraynumbers = creditCardNumber.split('').reverse().map((x)=>parseInt(x));
  //definimos una variable para la suma de todos los digitos
  let suma = 0;
  //asiganmos un valor booleano a la variable validate
  let validate = false;
  
//generamos un nuevo array cogiedo el valor que guardamos en la variable arraynumbers, lo recorremos
//(.map), para iterar cada digito del array 
  const newArrayNumbers = arraynumbers.map((element,index )=> {
     
    //haciendo uso del condicional establecemos que solo los numeros que se encuentren en posicion impar
    //(usando modulador % que sea diferente de 0), vamos a duplicar, cogiendo el elemento y reasignandolo (elemento *2)
      if (index % 2 !== 0) {          
          element = element*2;
          //si este elementp es mayor o igual a 10 
          if (element >= 10){
              //se coge el elemento convirtiendolo en string, y usando .split de nuevo para hacerlo array y poder acceder
              // a sus elementos por su indice
              const elementList = String(element).split('');
              //reasiganmos de nuevo el elemento que sea el elemeto en el 0 y 1 se sumen y anteriormente sean convertidos
              // en numeros para poderlos operar
              return element = Number(elementList[0]) + Number(elementList[1]);
          } else {
              //de lo contrario me devuelva el elemento sin hacerle nada
              return element
          }
      } 
      return element
  });

 //teniendo todos los digitos (elementos) modificados y guardados en la variable newArrayNumbers
 //los itero cada uno con el metodo (.forEach)
  newArrayNumbers.forEach(element => {
      //tomamos la variable suma  y le sumamos cada elemento al iterarlo, va acumulando la suma 
      suma += element;
      //retornamos ese valor suma al iterar todos sus elementos
      return suma;  
  });

//condicionamos si ese valor de la suma es un numero que termina en 0, es decir si el reciduo de la divicion en 10 es 0
//la tarjeta es validad, porque es lo contrario al valor guardado en la variable validate
  if (suma % 10 === 0 ){
      return !validate
  }   
    
    return validate
} 


//funcion que me enmascare todos los digitos menos los ultimos 4
function maskifyCreditCard (creditCardNumber) {
  
  //cortar desde el indice 0 hasta 4 digitos menos desde la ultima posicion
  let transformCCNumber = creditCardNumber.slice(0, -4);
  
  //corta los digitos que no se van a transformar 
  let noTransformCCNumber = creditCardNumber.slice(-4);
  

  //convertir transformCCNumber, a array(split(''))y cambiar c/digito por #, mediante el metodo de array map (genera un nuevo array)
  const transformCCNumberArray = transformCCNumber.split('').map((number) => {
      number = '#';
      return number
      // console.log(number)
  });

  //haciendo uso del .join, hace lo contrario de split, cambia un array a una cadena de texto
  const maskedNumber = transformCCNumberArray.join('');
  
  //usando el metodo .concat concatenamos texto 
  return maskedNumber.concat(noTransformCCNumber)
//   console.log(maskedNumber.concat(noTransformCCNumber)) 

}


const validator = {
  isValid: validateCreditCard,
  maskify: maskifyCreditCard,
};


export default validator;
