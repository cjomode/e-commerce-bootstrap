let valorFisico = 99.00;
let valorDigital = 69.00;
let valorFisicoAtualizado = valorFisico.toFixed(2);
let valorDigitalAtualizado = valorDigital.toFixed(2);
let valorAtual = valorFisico; // valor inicial
let count = 1;
let element = document.querySelector("#Adicionar")

function changeText(text) {
    document.querySelector('.btn-secondary').textContent = text;
}

function numeroPadrao(){
    document.getElementById("valorFisico").innerHTML = `Valor:R$ ${valorFisicoAtualizado}`;
    updateTotal();
}
numeroPadrao();

function changeValue(option) {
    const valor = document.getElementById('versao')
    const valueAcquired = valor.value

    const valorFisicoElement = document.getElementById('valorFisico');

    if (valueAcquired == 'Fisico') {
        valorFisicoElement.textContent = `Valor R$ ${valorFisicoAtualizado}`;
        valorAtual = valorFisico;
    } else if (valueAcquired == 'Digital') {
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
function updateTotal() {
    const totalElement = document.getElementById('total');
    const total = (valorAtual * count).toFixed(2);
    totalElement.textContent = `Total: R$ ${total}`};


element.addEventListener("click", () => {
    console.log(count)
   /*  document.getElementById("cartcount").textContent = count; */
    const cartCountElement = document.getElementById('cartcount');
    cartCountElement.textContent = count + Number(cartCountElement.textContent);
    window.alert(`Produto adicionado ao carrinho! Quantidade em estoque: ${count}.`);
})