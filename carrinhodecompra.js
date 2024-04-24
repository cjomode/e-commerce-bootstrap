let valorFisico = 19.00;
let valorDigital = 10.00;
let valorFisicoAtualizado = valorFisico.toFixed(2);
let valorDigitalAtualizado = valorDigital.toFixed(2);
let valorAtual = valorFisico; // valor inicial
let count = 1;

function changeText(text) {
    document.querySelector('.btn-secondary').textContent = text;
}

function numeroPadrao(){
    document.getElementById("valorFisico").innerHTML = `Valor:R$ ${valorFisicoAtualizado}`;
    updateTotal();
}
numeroPadrao();

function changeValue(option) {
    const valorFisicoElement = document.getElementById('valorFisico');
    if (option === 'Físico') {
        valorFisicoElement.textContent = `Valor R$ ${valorFisicoAtualizado}`;
        valorAtual = valorFisico;
    } else if (option === 'Digital') {
        valorFisicoElement.textContent = `Valor R$ ${valorDigitalAtualizado}`;
        valorAtual = valorDigital;
    }
    updateTotal();
}

const countElement = document.getElementById('count');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');

decrementButton.addEventListener('click', () => {
    if (count > 1) {
        count--;
        updateCount();
        updateTotal();
    }
});

incrementButton.addEventListener('click', () => {
    if (count < 10) {
        count++;
        updateCount();
        updateTotal();
    }
});

function updateCount() {
    countElement.textContent = count;
}

function updateTotal() {
    const totalElement = document.getElementById('total');
    const total = (valorAtual * count).toFixed(2);
    totalElement.textContent = `Total: R$ ${total}`;
}