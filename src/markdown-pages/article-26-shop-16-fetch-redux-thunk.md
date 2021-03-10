---
title: "[Shop 16] Fetching mit Redux Thunk"
date: "2021-01-01 12:26"
---

Mittlerweile ist unsere JSON Datei in Firebase gespeichert und wird per GET Request gefetched. Es gibt einen Loading State. Das gesamte Projekt ist auf Hooks umgestellt, unsere Pfade sind absolut und alle Redux-Dateien lose im Redux-Ordner.

Das letzte Ziel ist nun das Fetching mit Redux zu regeln. Mit Hilfe von REDUX THUNK.

Nach der Installation wird Thunk erst einmal dem STORE hinzugefügt.

![Screenshot](../images/26-1.jpg)

Nun brauchen wir verschiedene TYPES die alle im REDUCER abgefragt werden.

![Screenshot](../images/26-2.jpg)

Für all diese TYPES schreiben wir ACTIONS.

![Screenshot](../images/26-3.jpg)

Mit Hilfe eines weiteren kleinen SELECTORS...

![Screenshot](../images/26-4.jpg)

...können wir nun die Shop Page auf THUNK umbauen.

![Screenshot](../images/26-5.jpg)

Die Änderungen der Shop Page in der Übersicht:

![Screenshot](../images/26-6.jpg)

Der Shop funktioniert fast vollständig, nur ein Reload auf /shop/category/ schlägt noch fehl, weil hier Werte erwartet werden die es beim rendern noch nicht gibt.

Wir schreiben hierfür einen neuen SELECTOR den wir mit in unsere LOADING Abfrage nehmen.

![Screenshot](../images/26-7.jpg)
