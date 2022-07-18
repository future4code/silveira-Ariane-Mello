const exercise = process.argv[2];

const name = process.argv[2];
const age = Number(process.argv[3]);

if (name && age) {
    console.log("\033[35m", `Olá, ${name}! Você tem ${age} anos.`);
} else {
    console.log("\033[35m Esperava 2 parâmetros só recebi um.");
};

if (name && age) {
    console.log("\033[35m", `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`);
} else {
};

