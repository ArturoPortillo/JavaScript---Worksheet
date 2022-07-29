            
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

