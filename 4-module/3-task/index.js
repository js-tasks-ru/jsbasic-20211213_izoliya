function highlight(table) {
  for (i = 1; i < table.rows.length; i++) {
    if (table.rows[i].lastElementChild.dataset.available === "true") {
      table.rows[i].classList.add('available');
    } else if (table.rows[i].lastElementChild.dataset.available === "false") {
      table.rows[i].classList.add('unavailable');
    } else {
      table.rows[i].setAttribute('hidden', '');
    }
    if (table.rows[i].cells[2].textContent === 'm') {
      table.rows[i].classList.add('male');
    } else if (table.rows[i].cells[2].textContent === 'f') {
      table.rows[i].classList.add('female');
    } else continue;
    if (+table.rows[i].cells[1].textContent < 18) {
      table.rows[i].style.textDecoration = "line-through";
    } else continue;
  } return (table);
}
