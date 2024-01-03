const VARIANT = 71 % 36;
const tableContainer = document.querySelector('.table-container');

const rand = (max) => Math.floor(Math.random() * (max + 1));

const createTable = (
    parentElement,
    cols,
    rows
) => {
    const table = document.createElement('table');
    let currentCell = 1;
    for (let row = 0; row < rows; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < cols; col++) {
            const td = document.createElement('td');
            td.setAttribute('id', `cell-${currentCell}`);
            td.textContent = currentCell;
            tr.appendChild(td);
            currentCell++;
        }
        table.appendChild(tr);
    }
    parentElement.appendChild(table);
};

const onMouseOver = (event) => {
    const targetCell = event.target;
    targetCell.style.background = `rgb(${rand(256)},${rand(256)},${rand(256)})`;
};

const onClick = (event) => {
    const targetCell = event.target;
    const backgroundColor = colorInput.value;
    targetCell.style.background = backgroundColor;
};

const onDblClick = (event) => {
    const targetCell = event.target;
    const backgroundColor = colorInput.value;
    const tableRow = targetCell.parentElement;
    for (const cell of tableRow.cells) {
        cell.style.background = backgroundColor;
    }
};

createTable(tableContainer, 6, 6);
const eventListener = document.querySelector(`#cell-${VARIANT}`);
const colorInput = document.querySelector('.table-cell-color-input');
eventListener.style.cursor = 'pointer';

eventListener.addEventListener('mouseover', onMouseOver);
eventListener.addEventListener('click', onClick);
eventListener.addEventListener('dblclick', onDblClick);