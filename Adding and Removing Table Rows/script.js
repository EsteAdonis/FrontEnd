const form = document.querySelector('form');
const tbodyEl = document.querySelector('tbody');
const tableEl = document.querySelector('table');

function onAddWebsite(e) {
  e.preventDefault();
  e.stopPropagation();
  const website = document.getElementById('website').value;
  const url = document.getElementById('url').value;
  tbodyEl.innerHTML += 
  `
    <tr>
      <td>${url}</td>
      <td>${website}</td>
      <td class="text-center"><button class="btn btn-danger btn-sm text-center">Delete</button></td>
    </tr>
  `;

  var row = tableEl.insertRow(-1);
  row.insertCell(0).textContent="Yo mero";
  row.insertCell(1).textContent="Esteban";
  row.insertCell(2).innerHTML = '<button class="btn btn-danger btn-sm text-center">Delete</button>';
  row.cells[2].classList.add('text-center')
}

function onDeleteRow(e) {
  if (!e.target.classList.contains('btn-danger')) {
    return;
  }
  // There are two way to delete the row
  // 1. is   e.target.closest('tr').remove();
  // 2. is   tableEl.deleteRow(e.target.closest('tr').rowIndex);
  
  e.target.closest('tr').remove();
  tableEl.deleteRow(e.target.closest('tr').rowIndex);
}

form.addEventListener('submit', onAddWebsite);
tableEl.addEventListener('click', onDeleteRow);