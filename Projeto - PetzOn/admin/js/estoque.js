function updateProductList() {
    const productList = document.getElementById('productList').getElementsByTagName('tbody')[0];
    productList.innerHTML = ''; // Limpa a tabela antes de atualizar
    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        const row = productList.insertRow(); // Cria uma nova linha
        row.insertCell(0).innerText = product.name; // Adiciona o nome do produto
        row.insertCell(1).innerText = parseFloat(product.price).toFixed(2).replace('.', ','); // Formata o preço
        row.insertCell(2).innerText = product.stock; // Adiciona a quantidade
    });
}

function addProduct(e) {
    e.preventDefault();
    const name = document.getElementById('productName').value.trim();
    let price = document.getElementById('productPrice').value.replace(',', '.'); // Substitui vírgula por ponto
    const stock = document.getElementById('productStock').value;

    // Verificação se os campos não estão vazios e se o preço e a quantidade são válidos
    if (!name || isNaN(price) || isNaN(stock) || price < 0 || stock < 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ name, price: parseFloat(price), stock: parseInt(stock) });
    localStorage.setItem('products', JSON.stringify(products));

    document.getElementById('productForm').reset(); // Limpa o formulário
    updateProductList(); // Atualiza a tabela
}

    updateProductList(); // Atualiza a lista de produtos ao carregar a página
    document.getElementById('productForm').addEventListener('submit', addProduct); // Adiciona o evento de envio

