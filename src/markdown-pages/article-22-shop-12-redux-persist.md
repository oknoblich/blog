---
title: "[Shop 12] Local Storage mit Redux Persist"
date: "2021-01-01 12:22"
---

Der Unterschied zwischen window.localStorage und window.sessionStorage ist, wie lange Daten im Browser gespeichert werden. LOCAL speichert Daten solange bis man alle seine Browser Daten löscht. SESSION speichert sie solange man den TAB offen hat. Gespeichert werden können nur STRINGS.

Wir installieren also erst einmal redux-persist.

![Screenshot](../images/22-1.jpg)

Wir erstellen eine PERSISTCONFIG in ROOTREDUCER JS, die sagt, welcher Reducer gespeichert werden soll. Wir brauchen das nur für den CART Reducer, nicht für den USER Reducer, da unser User von Firebase eh eingeloggt wird. Er ist also schon persistent. Dann wrappen wir PERSISTCONFIG und rootReducer in PERSISTREDUCER.

Auf Deutsch: Die Config sagt AB WO gespeichert werden soll (ROOT), mit welcher METHODE gespeichert werden soll (STORAGE) und WAS gespeichert werden soll (CART). Wir haben dem rootReducer, der in STORE JS zum STORE verarbeitet wird, also nur eine Config mitgegeben die sagt, WAS WIE persistet werden soll.

![Screenshot](../images/22-2.jpg)

Wir erstellen dann den PERSISTOR mit PRESISTSTORE in unserer STORE JS.

![Screenshot](../images/22-3.jpg)

Danach wrappen wir unsere App in PRESISTGATE.

![Screenshot](../images/22-4.jpg)

Und wir sehen unser Redux Store gets rehydratet mit Cart Items wenn wir die Seite neu laden.

![Screenshot](../images/22-5.jpg)

Wollen wir die Funktion wieder entfernen suchen wir einfach nur nach allem mit den Wort PERSIST.
