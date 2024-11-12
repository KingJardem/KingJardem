function updateSaleList() {
    const saleList = document.getElementById('saleList').getElementsByTagName('tbody')[0];
    saleList.innerHTML = '';
    const sales = JSON.parse(localStorage.getItem('sales')) || [];
    sales.forEach(sale => {
        const row = saleList.insertRow();
        row.insertCell(0).innerText = sale.product;
        row.insertCell(1).innerText = sale.amount;
        row.insertCell(2).innerText = sale.date;
    });
}

function addSale(e) {
    e.preventDefault();
    const product = document.getElementById('saleProduct').value;
    const amount = document.getElementById('saleAmount').value;
    const date = document.getElementById('saleDate').value;

    const sales = JSON.parse(localStorage.getItem('sales')) || [];
    sales.push({ product, amount, date });
    localStorage.setItem('sales', JSON.stringify(sales));

    document.getElementById('saleForm').reset();
    updateSaleList();
}

window.onload = () => {
    updateSaleList();
    document.getElementById('saleForm').addEventListener('submit', addSale);
};
