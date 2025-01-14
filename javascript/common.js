// common.js - actualizando las rutas de los widgets y la compatibilidad
const widgets = [
    // Ejemplo de widget
    {
        name: "New Widget",
        path: "path/to/new/widget.js",
        enabled: true
    },
    // Agregar más widgets según sea necesario
];

function loadWidgets() {
    widgets.forEach(widget => {
        if (widget.enabled) {
            // Aquí puedes agregar código para cargar los widgets en la página
            importWidget(widget.path);
        }
    });
}

function importWidget(path) {
    const script = document.createElement('script');
    script.src = path;
    document.head.appendChild(script);
}

loadWidgets();
