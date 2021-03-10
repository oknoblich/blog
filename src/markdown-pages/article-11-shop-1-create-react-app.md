---
title: "[Shop 1] App erstellen und mit Components strukturieren"
date: "2021-01-01 12:11"
---

Am Anfang starten wir Create React App.

![Screenshot](../images/11-1.jpg)

Wir entfernen das HTML und CSS dass von CRA erstellt wurde und starten frisch.

![Screenshot](../images/11-2.jpg)

Dann erstellen wir eine Homepage Component und bauen darin erstmal eine Shop Einstiegsseite. Basic HTML und CSS innerhalb einer Functional Component.

![Screenshot](../images/11-3.jpg)

![Screenshot](../images/11-4.jpg)

Jetzt unterteilen wir das Projekt in COMPONENTS und PAGES, denn wir wollen nicht alles in eine einzige Datei werfen. Dabei achten wir darauf, Parent und Child Components sowie ihre CSS Dateien korrekt zu exportieren und zu importieren. Außerdem erstellen wir unseren ersten STATE mit einem Array aus Shopping Kategorien.

![Screenshot](../images/11-5.jpg)

Das aktuelle Ergebnis:

![Screenshot](../images/11-6.jpg)

Damit wir das jetzt auf GitHub Pages bekommen, installieren wir wieder das gh-pages package und die dazugehörigen Scripts.

![Screenshot](../images/11-7.jpg)

Nachdem wir wieder YARN RUN DEPLOY ausgeführt haben, ist die Seite auch schon live: https://oknoblich.github.io/react-redux-shop/
