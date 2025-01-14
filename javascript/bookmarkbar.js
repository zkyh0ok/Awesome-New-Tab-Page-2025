// bookmarkbar.js - código actualizado para agregar marcadores
const bookmarks = [
    { name: "Google", url: "https://www.google.com" },
    { name: "GitHub", url: "https://github.com" }
];

function renderBookmarkBar() {
    const bookmarkBar = document.getElementById('bookmark-bar');
    bookmarks.forEach(bookmark => {
        const bookmarkElement = document.createElement('a');
        bookmarkElement.href = bookmark.url;
        bookmarkElement.textContent = bookmark.name;
        bookmarkBar.appendChild(bookmarkElement);
    });
}

renderBookmarkBar();
