type dados = {
    name: string,
    birthDate: string
};

const person = {
    name: 'Ariane',
    birthDate: '21/07/1993'
};

function separar(person: dados): string[]{
return person.birthDate.split('/');
};

console.log(`Olá me chamo ${person.name}, nasci no dia ${separar(person)[0]} do mês ${separar(person)[1]} do ano de ${separar(person)[2]}.`);

