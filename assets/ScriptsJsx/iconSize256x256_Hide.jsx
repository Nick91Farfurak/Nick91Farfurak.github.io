// Инициализируем глобальный индекс для нумерации файлов
var fileIndex = 0;

// Проверяем, есть ли открытый документ
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var layers = doc.layers;

    // Проверяем, есть ли слои в документе
    if (layers.length > 0) {
        // Перебираем все слои в документе
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];

            // Проверяем, является ли слой видимым
            if (layer.visible) {
                // Копируем текущий слой
                layer.copy();

                // Создаем новый документ с размером холста 256x256 пикселей
                var newDoc = app.documents.add(256, 256);

                // Вставляем слой в новый документ
                app.activeDocument = newDoc;
                newDoc.paste();

                // Устанавливаем название слоя
                newDoc.activeLayer.name = layer.name;

                while (newDoc.layers.length > 1) {
                    newDoc.layers[newDoc.layers.length - 1].remove();
                }

                // Формируем название файла PNG с инкрементированным индексом
                var folderPath = "E:/TechTask/Add-icon-armor-weapons-01-RSG/256x256/";
                var fileName = "rsg_" + layer.name + "_icon_" + ("00" + fileIndex).slice(-2) + "_256x256.png";
                var pngFileName = folderPath + fileName;
                var pngFile = new File(pngFileName);

                // Сохраняем документ в формате PNG с заданными параметрами
                var exportOptions = new ExportOptionsSaveForWeb();
                exportOptions.format = SaveDocumentType.PNG;
                exportOptions.PNG8 = true;
                exportOptions.quality = 128;
                exportOptions.transparency = true;
                exportOptions.interlaced = false;
                newDoc.exportDocument(pngFile, ExportType.SAVEFORWEB, exportOptions);

                // Закрываем новый документ без сохранения изменений
                newDoc.close(SaveOptions.DONOTSAVECHANGES);

                // Инкрементируем индекс для следующего файла
                fileIndex++;
            }
        }
    } else {
        alert("В документе нет слоев.");
    }
} else {
    alert("Нет открытых документов.");
}
