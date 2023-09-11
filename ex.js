class Animal {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }

    falar() {
        return `Olá, meu nome é ${this.nome}.`
    }

}

class Cachorro extends Animal {
    constructor(nome, cor, raça) {
        super(nome, cor);
        this.raça = raça;
    }
    latir() {
        return `au au!`;
    }
    
}

class Gato extends Animal {
    constructor(nome, cor, raça){
        super(nome,raça)
        this.raça = raça;
    }
    miar(){
        retutn `miau!`
    }
}

const animais = [
    new Cachorro("Rex", "Junio", "Teobaldo"),
    new Gato("Monstro", "Garfield", "Marrom"),
];

for (const Animal of animais) {
    console.log(`O animal "${Animal.nome}" é ${this.cor}.`);
}

for (const Animal of animais) {
    console.log(Animal.falar());
}


const cachorro = animais[0];
console.log(cachorro.latir());

const gato = animais[0];
console.log(gato.latir());