function updateProcedureList() {
    const procedureList = document.getElementById('procedureList').getElementsByTagName('tbody')[0];
    procedureList.innerHTML = '';
    const procedures = JSON.parse(localStorage.getItem('procedures')) || [];
    procedures.forEach(procedure => {
        const row = procedureList.insertRow();
        row.insertCell(0).innerText = procedure.name;
        row.insertCell(1).innerText = procedure.date;
    });
}

function addProcedure(e) {
    e.preventDefault();
    const name = document.getElementById('procedureName').value;
    const date = document.getElementById('procedureDate').value;

    const procedures = JSON.parse(localStorage.getItem('procedures')) || [];
    procedures.push({ name, date });
    localStorage.setItem('procedures', JSON.stringify(procedures));

    document.getElementById('procedureForm').reset();
    updateProcedureList();
}

updateProcedureList();
document.getElementById('procedureForm').addEventListener('submit', addProcedure);