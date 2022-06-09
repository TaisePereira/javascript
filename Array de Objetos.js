// Objetos
let pessoa = {
    firstName: 'Irmão do',
    lastName: 'Jorel',
    idade:10,
    corDosOlhos: 'preto',
    hobbies: ['música', 'filme', 'esporte'],
    endereço: {
        rua: 'Rua do bobos',
        numero: 0,
        cidade: 'São Paulo',
        estado: 'SP',
    },
};

console.log(pessoa);
console.log(pessoa.firstName); 
console.log(pessoa.lastName, pessoa.idade); 
console.log(pessoa.hobbies[1]); 
console.log(pessoa.endereço.cidade); 

// Array de objetos 
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

console.log(tarefas); 
console.log(tarefas[1].texto);
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted);

// Transformar um array em JSON
console.log(JSON.stringify(tarefas));

[{ "id": 1, "texto": "Levar o lixo para fora","isCompleted":true },{ "id": 2,"texto": "Encontrar com o chefe","isCompleted": true}, { "id": 3, "texto": 
  "Consulta no dentista","isCompleted":false}]

// JSON 
const tarefa_JSON =


'[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true},{"id":2,"texto":"Encontrar com o chefe","isCompleted":true},{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';


const objeto = JSON.parse(tarefa_JSON);

console.clear();
console.log(objeto);

