
/* Por los momentos me estaria complicando más hacer el proyecto con una clase, si quiero evaluar lo que ingresa el usuario para saber si en el nombre pone numeros y letras se me hace mas facil trabajar con un objeto y luego cargar ese objeto en un array por lo cual 'comento' el codigo de 'Class' */
/* class User {
    constructor(userName, lastName, income) {
        this.userName  = userName.toUpperCase();
        this.lastName  = lastName.toUpperCase();
        this.income = income;
        }
    } */
    
    const userData = []; 
    
    let newName = prompt("Ingresa tu nombre: ")
    let userlastName = prompt("Ingresa tu apellido: ")
    let userIncome = parseFloat(prompt("Total de ingresos disponibles: "))


const newUser = {
    userName: newName,
    lastName: userlastName,
    income: userIncome,
}

console.log(newUser)

userData.push(newUser)

const validText = !/[^a-zA-Z]/.test.newName

    console.log("El nombre a evaluar es "+newName)

    if (!/[^a-zA-Z]+$/.test.newName)        
        console.log("El nombre de usuario es "+validText) 

    console.log(userData)
    console.log("Usuarios registrados: "+userData.length)
                                

/* El array pasaria a ser userName = [name: ,lastName: , income: ] */
/* Resultado esperado:
    newUser
    name: "ARTURO"
    lastName: "PORTILLO"
    income: 50000 ó el monto que ingresemos en el prompt
*/

/* Declaramos variables */

    let income = userData[0].income; /* Tomamos el valor de la propiedad "income" dentro del arreglo userName recorriendo el array con [0] */ 
    let expense = 0;
    let total = 0; 
                
        function dec(income, expense) { 
            return income - expense;
            }
/* Luego nuestro ciclo se ejecuta... */

while (total >= 0) {
        
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
