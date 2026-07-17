// Функция для перемещения всех слоев из папок на верхний уровень
function extractLayersFromFolders(layerSet, rootDoc) {
    var layers = layerSet.artLayers;
    var subLayerSets = layerSet.layerSets;

    // Перемещаем все слои на верхний уровень
    for (var i = layers.length - 1; i >= 0; i--) {
        layers[i].move(rootDoc, ElementPlacement.INSIDE);
    }

    // Рекурсивно перемещаем слои из вложенных папок
    for (var j = subLayerSets.length - 1; j >= 0; j--) {
        extractLayersFromFolders(subLayerSets[j], rootDoc);
    }
}

// Функция для удаления всех пустых папок
function deleteEmptyFolders(layerSet) {
    var subLayerSets = layerSet.layerSets;

    // Рекурсивно удаляем пустые папки
    for (var i = subLayerSets.length - 1; i >= 0; i--) {
        deleteEmptyFolders(subLayerSets[i]);
        if (subLayerSets[i].artLayers.length === 0 && subLayerSets[i].layerSets.length === 0) {
            subLayerSets[i].remove();
        }
    }
}

// Проверяем, есть ли открытый документ
if (app.documents.length > 0) {
    var doc = app.activeDocument;

    // Обрабатываем все корневые папки
    for (var i = doc.layerSets.length - 1; i >= 0; i--) {
        extractLayersFromFolders(doc.layerSets[i], doc);
    }

    // Удаляем все пустые папки
    for (var j = doc.layerSets.length - 1; j >= 0; j--) {
        deleteEmptyFolders(doc.layerSets[j]);
    }

    alert("Все слои извлечены из папок и пустые папки удалены.");
} else {
    alert("Нет открытых документов.");
}
