// Método forEach() 
const frutas = ['apple', 'orange', 'cherry']; 
frutas.forEach(minhaFuncao); 

function minhaFuncao(item, index) { 
    console.log(`Índice: ${index}`); 
    console.log(`Elemento: ${item}`); 
} 

// Método forEach() com Arrow Function 
console.clear(); 
const frutas01 = ['apple', 'orange', 'cherry']; 
frutas01.forEach((index, item) => { 
    console.log(`Índice: ${index}`); 
    console.log(`Elemento: ${item}`); 
});

// forEach() com array de objetos 
console.clear();
const tarefas = [
    { 
        id: 1, 
        texto: 'Levar o lixo para fora', 
        isCompleted: true, 
    }, 
    { 
        id: 2, 
        texto: 'Encontrar com o chefe', 
        isCompleted: true, 
    }, 
    { 
        id: 3, 
        texto: 'Consulta no dentista',
        isCompleted: false,
    }, 
];   
    
