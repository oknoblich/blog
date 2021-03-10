---
title: "Git Cloning der gesamten History verhindern"
date: "2021-01-01 12:08"
---

Bei einem GIT CLONE werden alle Dateien auf den Rechner geladen die in diesem Repo je existiert haben. Das kann erhebliche Unterschiede bei der Downloadgeschwindigkeit machen.

Dies lässt sich mit der Flag --depth=1 verhindern.

Vergleichen wir die beiden Prozesse einmal. Nehmen wir als Beispiel an, wir wollen Bootstrap clonen.

![Screenshot](../images/8-1.jpg)

Wie man sehen kann gibt es einen großen Unterschied bei den Objekten die vom Server geladen werden.

163.000 vs 670 Objekte

![Screenshot](../images/8-2.jpg)

Auch beim Ordner auf der Festplatte lässt sich dieser Unterschied feststellen.

196 vs 15 Megabyte

![Screenshot](../images/8-3.jpg)

Hier die beiden Befehle zum Vergleich.

![Screenshot](../images/8-4.jpg)
