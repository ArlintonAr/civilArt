//variables Q A S n p 

//Area 
//perimetro
//coeficiente (rugosidad)
//pendiente (s)


const calculateCaudal=(area,perimetro,coef,pendiente)=>{
 const caudal=(((area)^5/3)* Math.sqrt(pendiente))/(coef*(perimetro^2/3)) 
 return caudal
}

calculateCaudal(20,9,0.0014,0.02)
console.log(calculateCaudal(20,9,0.0014,0.02))


console.log("Hola mundo")