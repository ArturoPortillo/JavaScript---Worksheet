/* ################## Create Element Function ################## */

    function elementFromHtml(html) {
        const template = document.createElement("template");

        template.innerHTML = html.trim();

        return template.content.firstElementChild;
    }


/* ################## Base Code ################## */

    const userData = []; 

    let newName = prompt("Ingresa tu nombre: ");
    let userlastName = prompt("Ingresa tu apellido: "); 
    let userIncome = 0; 
    
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

/* ################## JSON Tests ################## */

const userValues = JSON.stringify(userData)
console.log("los valores son"+userValues)

sessionStorage.setItem('User',userValues);

const savedUser = sessionStorage.getItem('User', userValues)
console.log(savedUser)

/* ################## Validate Input ################## */

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

/* ################## Base vars ################## */

    let income = userData[0].income; /* Tomamos el valor de la propiedad "income" dentro del arreglo userData recorriendo el array con [0] */ 
    let expense = 0;
    let total = 0; 
                
        function dec(income, expense) { 
            return income - expense;
            }

/* ################## Main Loop ################## */

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
/* ################## Main selectors ################## */

const displayUser = document.querySelector(".userData");
const displayExpense = document.querySelector("#expenseLog");
const displayBalance = document.querySelector(".currentBalance");

displayUser.innerText = "Hola! "+newName+" "+userlastName;

function addBalance() {
    userIncome = parseFloat(prompt("Total de ingresos disponibles: ")) 
    displayBalance.innerText = userIncome;
} 

/* ################## Expense Functions ################## */

let aExpense = 0;
function addExpense() {    
    aExpense = parseFloat(prompt("Ingresa un gasto: "));
    let newExpense = document.getElementById('expenseLog')
    let someExpense = document.createElement("div");
    someExpense.innerHTML = '<h1 style="color:red;margin-right:4rem"> -$'+aExpense+'</h1>';
    displayBalance.innerText = userIncome - aExpense;
    newExpense.appendChild(someExpense)
    console.log(someExpense)
}
displayExpense.innerText = "-$"+aExpense;
displayBalance.innerText = userIncome - aExpense;

/* ################## User Functions ################## */

function changeUser() {
    let newName = prompt("Ingresa tu nombre: ")
    let userlastName = prompt("Ingresa tu apellido: ")
    let yourInfo = document.querySelector("intro")
    let yourName = document.createElement("h1");
    yourName.innerHTML = '<h1 style="color:red;margin-right:4rem"> Hola!'+newName+' '+userlastName+'</h1>';
    intro.appendChild(yourName)
    /* displayUser.innerText = "Hola! "+newName+" "+userlastName; */
} 

let userForm = document.getElementById("form");
userForm.addEventListener("submit", updateUsername);

function updateUsername(e){
    e.preventDefault();
    let formData = e.target
    displayUser.innerText = "Hola! "+formData.children[2].value+" "+formData.children[4].value;
}
/* ################## Balance Functions ################## */
let balanceInput = document.getElementById("updateBalance");
balanceInput.addEventListener("submit", sumBalance);

function sumBalance(e){
    e.preventDefault();
    let currentBalance = e.target
    displayBalance.innerText = "$"+currentBalance.children[0].value;
}



/* ################## TESTS ################## */


/* function addBalance() { 
    const totalIncome = [];
    console.log(totalIncome)
    let userIncome = parseFloat(prompt("Ingresa un nuevo monto: "))
    totalIncome.push(userIncome)
    console.log(totalIncome)
    const actualIncome = totalIncome.reduce((a, b) => a + b, 0)    
    console.log(actualIncome);
    
    displayBalance.innerText = "$ "+actualIncome; 
}  */


