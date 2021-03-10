---
title: "[Shop 2] React Router, Form Components, Input State"
date: "2021-01-01 12:12"
---

Wir installieren react-router-dom.

![Screenshot](../images/12-1.jpg)

Wir importieren BrowserRouter und wrappen die gesamte App darum.

![Screenshot](../images/12-2.jpg)

Wir importieren Switch und Route und nutzen es um zwischen Pages zu navigieren.

![Screenshot](../images/12-3.jpg)

Damit wir kein Prop Drilling veranstalten müssen und trotzdem alle Childs Zugang zum Router haben, importieren wie withRouter wo wir es brauchen und exportieren die Component damit.

![Screenshot](../images/12-4.jpg)

Wir erstellen eine Shop Page und verlinken sie im Router.

![Screenshot](../images/12-5.jpg)

Dann erstellen wir eine CategoryPreview Component und mappen sie auf unserer Shop Page.

![Screenshot](../images/12-6.jpg)

![Screenshot](../images/12-7.jpg)

Wir wollen aber nur 4.

![Screenshot](../images/12-8.jpg)

Wir erstellen eine Header Component und weitere Unterseiten, zwischen denen wir mit dem Header navigieren können.

![Screenshot](../images/12-9.jpg)

Wir erstellen ein Login Formular und handlen schon einmal ein wenig den State. Bei Änderungen wird der Value live in den State geschrieben, beim Submit des Forms wird der State, und somit auch die Inputs, geleert.

![Screenshot](../images/12-10.jpg)

Daraus machen wir nun eine Form Input Component und eine Button Component.

![Screenshot](../images/12-11.jpg)

![Screenshot](../images/12-12.jpg)

Console Log zeigt uns, unsere Components funktionieren wie sie sollen.

![Screenshot](../images/12-13.jpg)

Wir pushen alles zu GitHub und rufen wieder gh-pages DEPLOY auf den Plan.

![Screenshot](../images/12-14.jpg)

![Screenshot](../images/12-15.jpg)

Die Navigation läuft aber nicht, da im Gegensatz zu localhost die App nun hinter /react-redux-shop/ liegt. Abhilfe schaffen wir uns, indem wir den BrowserRouter mit HashRouter ersetzen.

![Screenshot](../images/12-16.jpg)

Nun läuft die App im /#/ Mode und wir können auch auf GitHub Pages navigieren.
