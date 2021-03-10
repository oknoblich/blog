---
title: "[Shop 11] Anzahl verringern Funktion in Redux"
date: "2021-01-01 12:21"
---

ADD ITEM und CLEAR ITEM hatten eine klare Aufgabe. Ein Item hinzufügen oder ein Item komplett entfernen. REMOVE ITEM kann jedoch verschiedene Dinge aufrufen. Ich kann die Anzahl verringern wenn ich mehrere Items habe ODER das Item komplett entfernen wenn ich nur eines habe und dann REMOVE klicke.

![Screenshot](../images/21-1.jpg)

Dazu müssen wir nichts weiter tun als die beiden bereits geschriebenen Funktionen zu vereinen und abzufragen, ob EIN Item im Cart liegt oder nicht.

![Screenshot](../images/21-2.jpg)

Der Rest ist Redux Business as usual:

![Screenshot](../images/21-3.jpg)

![Screenshot](../images/21-4.jpg)
