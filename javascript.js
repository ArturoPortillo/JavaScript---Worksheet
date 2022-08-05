document.getElementById("btn").onclick = function() {runPrompt()};

            function runPrompt() {


                /* Creacion de clase con las propiedades que describen a un usuario */
                class newUser {
                    constructor(name, lastName, income) {
                        this.name  = name.toUpperCase();
                        this.lastName  = lastName.toUpperCase();
                        this.income = income;
                        }
                }

                /* Creacion de un Array donde cargamos los datos del usuario usando nuestra clase "newUser"*/

                const userName = [];
                userName.push(new newUser((prompt("Ingresa tu nombre: ")), (prompt("Ingresa tu apellido: ")), (parseFloat(prompt("Total de ingresos disponibles: ")))));

                console.log(userName)

                /* El array pasaria a ser userName = [name: ,lastName: , income: ] */

                /* Resultado esperado:
                newUser
                name: "ARTURO"
                lastName: "PORTILLO"
                income: 50000 ó el monto que ingresemos en el prompt
                */

                /* Declaramos variables */

                let income = userName[0].income; /* Tomamos el valor de la propiedad "income" dentro del arreglo userName recorriendo el array con [0] */
                let expense = 0;
                let total = 0;
                
                    function dec(income, expense) { 
                        return total =  income - expense;
                    }
                    
                /* Luego nuestro ciclo se ejecuta... */
                                
                for (let i = 0; i < 1 ; i--) {
                    
                            if (isNaN(income)) {
                                console.log("Ingresa un monto válido.");
                            break;
                            } else {
                                console.log("Tienes " + income + " pesos disponibles.");
                                }
                
                    let expense = parseFloat(prompt("Ingresa un gasto: "));
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
                            income = income - expense;  
                            continue;
                            }
                            else if (total < 1) 
                            console.log("No tienes dinero disponible.");  
                            break;            
                            }; 
}                       

