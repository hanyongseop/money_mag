document.getElementById('fundForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const purpose = document.getElementById('purpose').value;
  const deposit = document.getElementById('deposit').value;
  const withdrawal = document.getElementById('withdrawal').value;

  const table = document.getElementById('fundTable');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${name}</td><td>${phone}</td><td>${date}</td><td>${purpose}</td><td>${deposit}</td><td>${withdrawal}</td>`;
  table.appendChild(row);

  this.reset();
});

