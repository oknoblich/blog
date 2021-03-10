---
title: "[Shop 6] Redux Intro"
date: "2021-01-01 12:16"
---

REDUX ersetzt STATE und macht STATE in REACT generell SKALIERBARER.

![Screenshot](../images/16-1.jpg)

Der Flow of Data wird immer unübersichtlicher je größer die App wird.

![Screenshot](../images/16-2.jpg)

![Screenshot](../images/16-3.jpg)

Redux tritt an um dieses Problem zu lösen.

![Screenshot](../images/16-4.jpg)

![Screenshot](../images/16-5.jpg)

![Screenshot](../images/16-6.jpg)

![Screenshot](../images/16-7.jpg)

Der FLUX Pattern von Redux ersetzt den klassischen MVC Pattern.

![Screenshot](../images/16-8.jpg)

![Screenshot](../images/16-9.jpg)

Redux will PROP DRILLING verhindern.

![Screenshot](../images/16-10.jpg)

Components triggern ACTIONS die wiederum REDUCER triggern. Diese schreiben einen globalen State der wiederum zurück zu den Components geleitet wird. Unidirectional Data Flow.

![Screenshot](../images/16-11.jpg)

Eselsbrücken:

Ein App besteht aus Functions, nennen wir sie ANGESTELLTE. Wenn der User im UI rumklickt, erteilt er verschiedenen ANGESTELLTEN verschiedene Aufgaben. Ein Chaos entsteht, alle rennen rum, machen was sie wollen. REDUX, der BOSS, will dies ändern. Er führt REDUCER ein (die selbst nichts weiter als Functions sind). REDUCER sind ABTEILUNGSLEITER Functions. Klickt der User im UI rum, gehen die Aufgaben an die ABTEILUNGSLEITER, die erstmal prüfen ob überhaupt eine Änderung stattgefunden hat. Wenn nicht, machen sie nichts. Wenn doch, leiten die ABTEILUNGSLEITER die Änderungen hübsch verpackt an den ROOT REDUCER weiter (die rechte Hand vom BOSS). Nur der ROOT REDUCER führt nun die Änderungen im UI durch. Die ANGESTELLTEN machen gar nichts mehr im UI.

JEDE Aktion in der UI wird an ALLE Reducer gesendet. Ein Reducer ist nicht weiter als eine Function. Es nimmt den aktuellen State und eine Action. Checkt, ob diese Action irgendwas mit einer eigenen Abteilung zu tun hat. Wenn ja, stelle einen neuen State her (der alte State kann nicht verändert werden, er ist immutable), wenn nein, gib den State im Original zurück.

![Screenshot](../images/16-12.jpg)

In diesen Prozess können wir eine MIDDLEWARE einbauen. Ein Sekretariat, welches die Action noch vor dem Abteilungsleiter bekommt.

![Screenshot](../images/16-13.jpg)

Um Redux zum Laufen zu bekommen müssen wir mehrere Dinge in unsere App installieren: REDUX selbst, REACTREDUX, da Redux nicht nur mit React verwendet werden kann, und REDUXLOGGER als unsere erste Middleware.

![Screenshot](../images/16-14.jpg)

Danach brauchen wir den PROVIDER in der index.js. Die Elternkomponente unsere gesamten App.

![Screenshot](../images/16-15.jpg)

Dann schreiben wir als erstes unseren ersten REDUCER (den ersten Abteiliungsleiter).

![Screenshot](../images/16-16.jpg)

Und als zweites unseren ROOT REDUCER (die rechte Hand vom Boss) der alle Reducer kombiniert.

![Screenshot](../images/16-17.jpg)

Jetzt müssen wir unsere STATE noch irgendwo hin packen damit der PROVIDER (in der index.js) ihn verteilen kann. Wir erstellen dazu einen STORE mit dem Ergebnis unseres ROOTREDUCERS und allen MIDDLEWARES die wir noch in den Mix packen wollen.

![Screenshot](../images/16-18.jpg)

Jetzt bekommt der Provider endlich unseren fertigen Store.

![Screenshot](../images/16-19.jpg)

Am Ende fehlt noch ein finales Puzzlestück. Die Functions in unsere App (Mitarbeiter) müssen irgendwie mit den Reducern (Abteilungsleitern) kommunizieren. Dazu erstellen wir ACTIONS. Die Actions haben TYPE und PAYLOAD, genau die Dinge, die die Reducer bei ihrer Arbeit abfragen.

![Screenshot](../images/16-20.jpg)

Unsere neue Ordnerstruktur:

![Screenshot](../images/16-21.jpg)

RECAP

Um zukünftig mit dem STATE zu interagieren triggern wir ACTIONS. Diese ACTIONS werden an REDUCER übergeben, die die PAYLOAD in einen neuen STATE schreiben wenn der TYPE übereinstimmt. All die REDUCER schnappt sich der ROOT REDUCER, der mit COMBINEREDUCERS alle zu einem Objekt vereint. Dann erstellt CREATESTORE einen neuen STORE mit dem Inhalt des ROOTREDUCERS und aller benötigten MIDDLEWARES. Diesen STORE schnappt sich der PROVIDER und gibt ihn an unsere App.
