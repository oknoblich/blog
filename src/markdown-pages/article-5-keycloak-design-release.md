---
title: "Wie starte ich einen KC/DS Release in GitLab und DigitalOcean?"
date: "2021-01-01 12:05"
---

Ausgangslage:

* wir releasen v13
* MASTER in Keycloak / Design System ist zu 100% fertig und ready to go
* einen DEVELOP gibt es nicht

Wir führen also einen Release mit dem SIMPLE BRANCHING MODEL durch, ohne Patch Number und ohne RCs.

* wir erstellen in beiden Repos einen neuen BRANCH von MASTER mit git checkout -b release/v0.13 - OHNE .0 am Ende
* wir pushen den Branch
* wir ändern die Version in einem Release Commit "Release version 0.13"
* wir pushen den Branch

![Screenshot](../images/5-1.jpg)

Wir gehen in beiden Repos auf TAGS und erstellen einen neuen TAG namens v0.13 vom Release Branch als Quelle.

![Screenshot](../images/5-2.jpg)

![Screenshot](../images/5-3.jpg)

![Screenshot](../images/5-4.jpg)

Die Tags sind nun fertig:

![Screenshot](../images/5-5.jpg)

Nun müssen wir die statischen Dateien im CDN releasen. Wir gehen zu Digital Ocean und klicken aus SPACES und DIGITAL ASSETS und DESIGN SYSTEM.

![Screenshot](../images/5-6.jpg)

Hier erstellen wir einen neuen Ordner namens v0.13

![Screenshot](../images/5-7.jpg)

In diesen ziehen wir alle statischen Dateien aus dem DS DIST Ordner.

![Screenshot](../images/5-8.jpg)

Und markieren sie als PUBLIC.

![Screenshot](../images/5-9.jpg)

Hier tauchen regelmäßig FEHLER auf.

![Screenshot](../images/5-10.jpg)

Ist aber kein Problem, wir könnten einfach auf RETRY drücken.

![Screenshot](../images/5-11.jpg)

Und der Release ist abgeschlossen.
