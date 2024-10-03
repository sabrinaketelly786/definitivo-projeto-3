const products = [
    { id: 1, name: 'Kit de make 1: gatas acessíveis 1', price: 50 },
    { id: 2, name: 'Kit de make 2: gatas acessíveis 2', price: 100 },
    { id: 3, name: 'Kit de make 3; gatas acessíveis 3', price: 150 },
    { id: 4, name: 'Kit de make 2: gatas ricas', price: 450 },
];

let cart = [];

function displayCatalog() {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Preço: R$ ${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        catalog.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach((item, index) => {
        cartDiv.innerHTML += `<p>${item.name} - R$ ${item.price} <button onclick="removeFromCart(${index})">Remover</button></p>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Compra finalizada! Total: R$ ' + cart.reduce((total, item) => total + item.price, 0));
});

displayCatalog();
