
/* Por los momentos me estaria complicando más hacer el proyecto con una clase, si quiero evaluar lo que ingresa el usuario para saber si en el nombre pone numeros y letras se me hace mas facil trabajar con un objeto y luego cargar ese objeto en un array por lo cual 'comento' el codigo de 'Class' */
/* class User {
    constructor(userName, lastName, income) {
        this.userName  = userName.toUpperCase();
        this.lastName  = lastName.toUpperCase();
        this.income = income;
        }
    } */

    const userData = []; 

    let newName = prompt("Ingresa tu nombre: ");
    let userlastName = prompt("Ingresa tu apellido: ");
    let userIncome = parseFloat(prompt("Total de ingresos disponibles: "));
    
    const validText = !/[^a-zA-Z]/.test(newName)    
    const validText2 = !/[^a-zA-Z]/.test(userlastName)
    const validNumber = !/[^\d+$]/.test(userIncome)

const newUser = {
    userName: newName,
    lastName: userlastName,
    income: userIncome,
}
userData.push(newUser)
    console.log(newUser)
    console.log(userData)
    console.log("Usuarios registrados: "+userData.length)

    if (!/[^a-zA-Z]+$/.test(newName) && !/[^a-zA-Z]+$/.test(userlastName) === true && !/[^\d+$]/.test(userIncome)) {
        /* Validamos que el nombre, el usuario y los ingresos sean validos con RegEx, todas deben ser True para poder continuar */
        console.log("Validando nombre de usuario..."+validText) 
        console.log("Validando apellido de usuario..."+validText2) 
        console.log("Validando ingresos de usuario..."+validNumber) 
        console.log("Usuario:\nNombre: "+newName+"\nApellido: "+userlastName+"\nIngresos: "+userIncome )
    } else {
        /* Al Ingresar datos invalidos en el Nombre, Apellido o Ingresos, vaciamos el Array (No sabria vaciar el Object tambien pero seria ideal) */
        userData.splice(0,2)
        console.log("Datos ingresados inválidos, repita operación.") 
    }
                                

/* El array pasaria a ser userName = [userName: ,lastName: , income: ] */
/* Resultado esperado:
    userData
    userName: "ARTURO"
    lastName: "PORTILLO"
    income: 50000 ó el monto que ingresemos en el prompt
*/

/* Declaramos variables */

    let income = userData[0].income; /* Tomamos el valor de la propiedad "income" dentro del arreglo userData recorriendo el array con [0] */ 
    let expense = 0;
    let total = 0; 
                
        function dec(income, expense) { 
            return income - expense;
            }

/* Luego nuestro ciclo se ejecuta... */

while (total >= 0 && !/[^a-zA-Z]+$/.test(newName) && !/[^a-zA-Z]+$/.test(userlastName) === true && !/[^\d+$]/.test(userIncome)) {
        
    if (isNaN(income) || income <= 0) {
        console.log("Ingresa un monto válido.");
        break;
        } else {
            console.log("Tienes " + income + " pesos disponibles.");
        }
        
        expense = parseFloat(prompt("Ingresa un gasto: "));
    if (isNaN(expense) || expense > income) {
        console.log("Ingresa un monto válido.");
        break;
        }
        else {
            console.log("Gastas " + expense + " pesos");
        }   

        total = dec(income,expense);
            console.log("Te quedan " + total + " pesos disponibles.")   

    if (total >= 1) {   
        income = income - expense;   
        continue;                    
        }                         
        else {
            console.log("No tienes dinero disponible.")  
        break;
        }         
}


let displayUser = document.querySelector(".userData");
let displayExpense = document.querySelector(".expense");
let balance = document.querySelector(".currentBalance");

displayUser.innerText = newName+" "+userlastName;
displayExpense.innerText = expense;

function addBalance() {
    userIncome = parseFloat(prompt("Total de ingresos disponibles: ")) 
    balance.innerText = userIncome;
} 

function addExpense() {
    expense = parseFloat(prompt("Ingresa un gasto: "));
    displayExpense.innerText = expense;
    balance.innerText = userIncome - expense;
} 

function changeUser() {
    let newName = prompt("Ingresa tu nombre: ")
    let userlastName = prompt("Ingresa tu apellido: ")
    displayUser.innerText = newName+" "+userlastName;
} 
