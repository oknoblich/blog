---
title: "Wie erstelle ich ein auf GitHub gehostetes Portfolio mit mehreren Repositories auf einer einzigen kostenlosen Domain?"
date: "2021-01-01 12:03"
---

Als erstes wird natürlich ein GitHub Account benötigt. Die Registrierung ist noch das schwerste am ganzen Prozess. Der rest ist dank GitHub Pages super einfach. Zu erst einmal erstellen wir ein neues Repository.

![Screenshot](../images/3-1.jpg)

Dieses bekommt den exakten Namen des Users + github.io - also in diesem Fall oknoblich.github.io

![Screenshot](../images/3-2.jpg)

Dann brauchen wir eine INDEX page. Diese erstellen wir einfach in HTML. Wusstest du, dass in HTML fast alles optional ist? Sogar html, head und body? Alles was wir brauchen um zu starten sind diese 3 Zeilen.

![Screenshot](../images/3-3.jpg)

Diese Page pushen wie jetzt gemäß der in Github angezeigten Anleitung.

![Screenshot](../images/3-4.jpg)

Und schon ist sie da.

![Screenshot](../images/3-5.jpg)

Und die Seite automatisch live. Der Prozess dauerte nichtmal 5 Minuten.

![Screenshot](../images/3-6.jpg)

Jetzt wollen wir auf diesem Portfolio all unsere Projekte hosten. Theoretisch könnten wir nun einfach haufenweise Subfolder im Repo anlegen. Für jedes Projekt ein neuer Folder. Das macht aber a) das Repo ziemlich voll und b) kann man dann keine Projekte einzeln clonen oder forken. Also erstellen wir für jedes Projekt ein neues Repo. Jetzt müssen wir das nur in unser Portfolio bekommen.

Nehmen wir an wir bauen einen alten Klassiker, die React Todo Liste. Also erstellen wir wie im ersten Schritt erstmal ein Repo und pushen eine INDEX Datei.

![Screenshot](../images/3-7.jpg)

![Screenshot](../images/3-8.jpg)

Jetzt müssen wir GitHub mitteilen, dass wir das gerne in unserem Portfolio hätten. Dazu gehen wir auf SETTINGS und zu Github Pages. Dort selektieren wir unseren MAIN branch.

![Screenshot](../images/3-9.jpg)

Und fertig. Nun ist auch unser Projekt auf dem Portfolio: https://oknoblich.github.io/react-todo-list/

![Screenshot](../images/3-10.jpg)

Jetzt können wir beide Seiten noch miteinander verlinken.

![Screenshot](../images/3-11.jpg)

Und schon können wir hin- und her navigieren: https://oknoblich.github.io/

![Screenshot](../images/3-12.jpg)
