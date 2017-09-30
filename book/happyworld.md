{% if book.book %}

###{{ book.partemojis.book }} Das erste Programm mit Python {#Das_erste_Programm_mit_Python}

{% if book.video %}

%accordion%{{ book.partemojis.video }} Video - Calliope mini und Python - Das erste Programm mit Python%accordion%

iframe - Video

%/accordion%

<p></p>
{% endif %}

Neben der spielend einfachen Programmierung mit den [Editoren](http://calliope.cc/editor)
im [Webbrowser](https://de.wikipedia.org/wiki/Webbrowser), die stark an
die [Programmiersprache](https://de.wikipedia.org/wiki/Programmiersprache)
[Scratch](https://de.wikipedia.org/wiki/Scratch_%28Programmiersprache%29) erinnert,
gibt es die Möglichkeit [Python](https://de.wikipedia.org/wiki/Python_%28Programmiersprache%29) einzusetzen.
Python ist eine beliebte Programmiersprache, die leicht zu erlernen ist.

Die schlanke Python-Version "[MicroPython](https://micropython.org/)" wurde
für [Mikrocontroller](https://de.wikipedia.org/wiki/Mikrocontroller) entwickelt.
Auf dem Calliope mini wird die Anpassung von [MicroPython](https://microbit-micropython.readthedocs.io/en/latest/index.html)
für den [BBC micro:bit](https://de.wikipedia.org/wiki/BBC_micro:bit) verwendet.
Momentan gibt es noch keine spezielle Anpassung für den Calliope mini.
Das bedeutet, dass leider noch nicht alle Funktionen vom Calliope mini über Python angesprochen werden können.

#### Python-Programm auf den Calliope mini spielen {#Python_Programm_auf_den_Calliope_mini_spielen}

Um Python-Programme auf den Calliope mini zu spielen, werden hier zwei Varianten vorgestellt.
Eine mögliche dritte Variante mit dem Programm [picocom](https://github.com/calliope-mini/micropython#how-to-use)
wird nicht berücksichtigt.

**Variante 1: Mu**

1. Calliope mini mit dem USB-Kabel (Stecker Micro B) verbinden
2. Computer mit dem USB-Kabel (Stecker A) verbinden (Der Calliope mini wird nun als Gerät "MINI" angezeigt.)
3. den Editor [Mu](https://codewith.mu/) herunterladen, installieren und starten
4. Programm (Python-Anweisungen) schreiben
5. auf den Flash-Button klicken (beim ersten Mal das "MINI"-Gerät öffnen)

**Variante 2: uFlash**

1. Calliope mini mit dem USB-Kabel (Stecker Micro B) verbinden
2. Computer mit dem USB-Kabel (Stecker A) verbinden (Der Calliope mini wird nun als Gerät "MINI" angezeigt.)
3. Kommandozeilentool [uFlash](https://uflash.readthedocs.io/en/latest/) installieren (`pip install uflash`)
4. Programm (Python-Anweisungen) mit dem [Texteditor](https://de.wikipedia.org/wiki/Liste_von_Texteditoren) deiner Wahl schreiben
5. Programm als .py-Datei speichern
6. mit uFlash die gespeicherte .py-Datei auf das Gerät "MINI" kopieren (`uflash dateiname.py /run/media/benutzername/MINI`)

Nach der Abwicklung einer dieser Varianten wird dein Programm auf dem Calliope mini gestartet.

#### Happy World {#Happy_World}

Gib folgende Zeilen als dein erstes Programm (in Schritt 4 von Variante 1 oder 2) in den Editor ein
und spiele es auf deinen Calliope mini hoch. Speichere das Programm in einer Datei und bestimme
einen passenden, selbsterklärenden Namen für die Datei, zum Beispiel: `happyworld.py`.
So kannst du das Programm sichern und jederzeit darauf zugreifen.
{%ace edit=false, check=true, theme='chrome', lang='python'%}
from microbit import *

display.show(Image.HAPPY)
{%endace%}

Damit der Calliope mini mittels Python programmiert werden kann, muss zu Beginn eines Programms,
Python mit dem Funktionsbündel (Modul) microbit erweitert werden. Durch die Importierung "from microbit import *",
in der ersten Zeile, stehen alle Funktionen zur Verfügung, die wir für Programmierung vom Calliope mini brauchen.
Der Calliope mini besitzt eine 5x5 LED-Matrix. Mit der Funktion display.show() kannst du bestimmen, welche
der 25 LEDs leuchten sollen. Das Bild (Image.HAPPY - ein fröhliches Gesicht),
das angezeigt werden soll, steht zwischen den Klammern ( display.show(Image.HAPPY) ).
Image.HAPPY ist eines der vielen vordefinieren Bilder.

{% endif %}


