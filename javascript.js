/*  const user = prompt("Ingrese su nombre: ");
const age = prompt("Introduce tu edad: ");
const year = prompt("Año actual: ");

const dateofBirth = parseInt(year) - parseInt(age)

alert("Hola " + user + " su año de nacimiento es " + dateofBirth)     */

/* let entrada = prompt("ingrese un numero")
if (entrada > 11) { 
    alert("El numero es mayor a 10")
} else {
    alert("el numero es menor a 10")
} 

/* Ejercicio #1:: Tienes 3 Alumnos, ingresa sus datos correctamente para recibir cargar sus datos en el sistema y visualizarlos:

Alumno #1: Arturo          Alumno #2: Ana           Alumno #2: Adrian
Apellido: Portillo         Apellido: Silvestre      Apellido: Suarez
Primer parcial: 3          Primer parcial: 7        Primer parcial: 2
Segundo Parcial: 4         Segundo Parcial: 6       Segundo Parcial: 5

/* Declaraciones */
/* 
function fun() {    

let studentName = prompt("Ingrese nombre del alumno: ");
let lastName = prompt("Ingrese apellido del alumno: ");
let test1 = parseInt(prompt("Ingresa la nota del primer parcial: "));
let test2 = parseInt(prompt("Ingresa la nota del segundo parcial: "));
let finalGrade = (test1 + test2) / 2;

let studentNametwo = prompt("Ingrese nombre del alumno #2: ");
let lastNametwo = prompt("Ingrese apellido del alumno #2: ");
let test1two = parseInt(prompt("Ingresa la nota del primer parcial: "));
let test2two = parseInt(prompt("Ingresa la nota del segundo parcial: "));
let finalGradetwo = (test1two + test2two) / 2;

let studentNamethree = prompt("Ingrese nombre del alumno #3: ");
let lastNamethree = prompt("Ingrese apellido del alumno #3: ");
let test1three = parseInt(prompt("Ingresa la nota del primer parcial: "));
let test2three = parseInt(prompt("Ingresa la nota del segundo parcial: "));
let finalGradethree = (test1three + test2three) / 2;

for (let i = 0; i < 1; i++) {
    if (finalGrade >= 4){
    studentStatus = "Aprobado";    
    } else {    
        studentStatus = "Desaprobado"; 
        alert("Alumno: " + studentName + "\nApellido: " + lastName + "\nPrimer parcial: " + test1 + "\nSegundo parcial: " + test2 + "\nNota final: " + finalGrade + "\nEstado: " + studentStatus + "\n" + "\nAlumno: " + studentNametwo + "\nApellido: " + lastNametwo + "\nPrimer parcial: " + test1two + "\nSegundo parcial: " + test2two + "\nNota final: " + finalGradetwo + "\nEstado: " + studentStatus + "\n" +"\nAlumno: " + studentNamethree + "\nApellido: " + lastNamethree + "\nPrimer parcial: " + test1three + "\nSegundo parcial: " + test2three + "\nNota final: " + finalGradethree + "\nEstado: " + studentStatus);
        }
    }
} */

/* alert("Alumno: " + studentName + "\nApellido: " + lastName + "\nPrimer parcial: " + test1 + "\nSegundo parcial: " + test2 + "\nNota final: " + finalGrade + "\nEstado: " + studentStatus + "\n" + "\nAlumno: " + studentNametwo + "\nApellido: " + lastNametwo + "\nPrimer parcial: " + test1two + "\nSegundo parcial: " + test2two + "\nNota final: " + finalGradetwo + "\nEstado: " + studentStatus + "\n" +"\nAlumno: " + studentNamethree + "\nApellido: " + lastNamethree + "\nPrimer parcial: " + test1three + "\nSegundo parcial: " + test2three + "\nNota final: " + finalGradethree + "\nEstado: " + studentStatus); */

/* Complementario #1 : Crea un algoritmo usuando un ciclo

/* Declaraciones */

/* let income = 0;
let expense1 = 0;
let expense2 = 0;
const total = 0; */


            
            document.getElementById("btn").onclick = function() {myFunction()};

            function myFunction() {

                
                let expense = 0;
                let total = 0;
                
                    function dec(income, expense) {
                        return total =  income - expense;
                    }
                
                
                for (let income = 0; income < 1 ; income--) {
                    let income = parseInt(prompt("Total de ingresos disponibles: "));
                            if (isNaN(income)) {
                                console.log("Ingresa un monto válido.");
                            break;
                            } else {
                                console.log("Tienes " + income + " pesos disponibles.");
                                }
                
                    let expense = parseInt(prompt("Ingresa un gasto: "));
                        if (isNaN(expense) || expense > income) {
                            console.log("Ingresa un monto válido.");
                        break;
                        }
                        else {
                            console.log("Gastas " + expense + " pesos");
                            }   
                                        
                    dec(income,expense);
                        console.log("Te quedan " + total + " pesos disponibles.")
                            if (total >= 1) {     
                            continue;
                            }
                            else if (total < 1) 
                            console.log("No tienes dinero disponible.");  
                            break;            
                            } ;

}

document.getElementById("boton").onclick = function() {fun()};

            function fun() {

                let income = parseInt(prompt("Total de ingresos disponibles: "));
                let expense = 0;
                let total = 0;
                
                    function dec(income, expense) {
                        return total =  income - expense;
                    }
                
                
                for (let i = 0; i < 1 ; i--) {
                    
                            if (isNaN(income)) {
                                console.log("Ingresa un monto válido.");
                            break;
                            } else {
                                console.log("Tienes " + income + " pesos disponibles.");
                                }
                
                    let expense = parseInt(prompt("Ingresa un gasto: "));
                        if (isNaN(expense) || expense > income) {
                            console.log("Ingresa un monto válido.");
                        break;
                        }
                        else {
                            console.log("Gastas " + expense + " pesos");
                            }   
                                        
                    dec(income,expense);
                        console.log("Te quedan " + total + " pesos disponibles.")
                            if (total >= 1) {     
                            continue;
                            }
                            else if (total < 1) 
                            console.log("No tienes dinero disponible.");  
                            break;            
                            } ;

}

