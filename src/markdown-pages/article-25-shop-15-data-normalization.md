---
title: "[Shop 15] Data Normalization"
date: "2021-01-01 12:25"
---

Das Problem mit unserem Object Mapping ist, dass es bei 5 Einträgen kein Problem darstellt, bei 100.000 aber schon.

Siehe: Hashtables vs Arrays

https://www.kirupa.com/html5/hashtables_vs_arrays.htm

Statt durch 100.000 Objekte zu filtern (was Zeit kostet), können wir das Objekt aber auch einfach umschreiben.

Dazu gibt es hier eine nützliche UTIL Function:

https://dev.to/danielpdev/normalize-your-complex-js-objects-21d9

Für unseren Code werden wir allerdings das Objekt selbst verändern.

![Screenshot](../images/25-1.jpg)

![Screenshot](../images/25-2.jpg)

![Screenshot](../images/25-3.jpg)

Jetzt kann auch unsere teure Mapping Function weg.

![Screenshot](../images/25-4.jpg)

Jetzt brauchen wir noch einen Selector, der das Objekt wieder in einem Array verwandelt, damit wir im Frontend später noch darüber Mappen können.

![Screenshot](../images/25-5.jpg)
