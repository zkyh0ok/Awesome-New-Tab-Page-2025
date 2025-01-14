// tile-editor.js - agregando funcionalidad para editar y agregar tiles
const tileData = [
    {
        id: "tile1",
        content: "Widget content here",
        editable: true
    }
    // Puedes agregar más tiles o widgets aquí
];

function renderTiles() {
    tileData.forEach(tile => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        tileElement.textContent = tile.content;

        if (tile.editable) {
            tileElement.addEventListener('click', () => editTile(tile));
        }

        document.getElementById('tiles-container').appendChild(tileElement);
    });
}

function editTile(tile) {
    // Código para editar el tile
    alert(`Editing tile: ${tile.id}`);
}

renderTiles();
