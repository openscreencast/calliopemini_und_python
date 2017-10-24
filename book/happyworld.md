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
<br/>
Damit der Calliope mini mittels Python programmiert werden kann, muss zu Beginn eines Programms,
Python mit dem Funktionsbündel (Modul) microbit erweitert werden. Durch die Importierung "from microbit import *",
in der ersten Zeile, stehen alle Funktionen zur Verfügung, die wir für Programmierung vom Calliope mini brauchen.
Der Calliope mini besitzt eine 5x5 LED-Matrix. Mit der Funktion display.show() kannst du bestimmen, welche
der 25 LEDs leuchten sollen. Das Bild (Image.HAPPY - ein fröhliches Gesicht),
das angezeigt werden soll, steht zwischen den Klammern ( display.show(Image.HAPPY) ).
Image.HAPPY ist eines der vielen vordefinieren Bilder.<br/><br/>
{% endif %}

{% if book.story %}

<div style="{{book.storycss}}">{{ book.partemojis.story }}
Könnte eines der vordefinierten Bilder vielleicht das Passbild für die Tür hinter der Tafel sein ?
Am besten du probierst alle Bilder mal aus. Du programmierst jeweils ein Programm mit einem Bild
und spielst es auf den Calliope mini hoch, bist du alle Bilder durch hast. Das Bild auf der LED-Matrix
hältst du vor die Linse der Tür.

<br/><br/>
from microbit import *
<br/>
display.show(<select name="bild" size="1" onchange="setImage(this.value)"> 
<option value="HAPPY" selected>Image.HAPPY</option>
<option value="SAD">Image.SAD</option>
<option value="HEART">Image.HEART</option>
<option value="HEART_SMALL">Image.HEART_SMALL</option>
</select>)

</div>

<div style="{{book.storycss}}background-image: none;text-align:center;">

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="400"
   height="360"
   viewBox="0 0 105.83334 95.250003"
   version="1.1"
   id="svg8">
  <defs
     id="defs2">
    <marker
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow1Lend"
       style="overflow:visible">
      <path
         id="path3335"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         style="fill-rule:evenodd;stroke:#000000;stroke-width:1.00000003pt"
         transform="matrix(-0.8,0,0,-0.8,-10,0)" />
    </marker>
    <marker
       orient="auto"
       refY="0"
       refX="0"
       id="Arrow1Lstart"
       style="overflow:visible">
      <path
         id="path3332"
         d="M 0,0 5,-5 -12.5,0 5,5 Z"
         style="fill-rule:evenodd;stroke:#000000;stroke-width:1.00000003pt"
         transform="matrix(0.8,0,0,0.8,10,0)" />
    </marker>
    <linearGradient
       x1="86.851997"
       x2="86.851997"
       y1="32.324001"
       gradientUnits="userSpaceOnUse"
       y2="214.61"
       id="linearGradient5820">
      <stop
         offset="0"
         style="stop-color:#b7b7b7"
         id="stop5822" />
      <stop
         offset=".06875"
         style="stop-color:#b7b7b7"
         id="stop5824" />
      <stop
         offset=".34003"
         style="stop-color:#8c8c8c"
         id="stop5826" />
      <stop
         offset=".51347"
         style="stop-color:#676767"
         id="stop5828" />
      <stop
         offset="0.55"
         style="stop-color:#6b6b6b"
         id="stop5830" />
      <stop
         offset="0.775"
         style="stop-color:#3e3e3e"
         id="stop5832" />
      <stop
         offset="1"
         style="stop-color:#000000"
         id="stop5834" />
    </linearGradient>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2564">
      <path
         d="M 72.54,579.24 H 539.46 V 342.15 H 72.54 Z"
         id="path2566" />
    </clipPath>
  </defs>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
        <cc:license
           rdf:resource="http://creativecommons.org/publicdomain/zero/1.0/" />
        <dc:creator>
          <cc:Agent>
            <dc:title>openscreencast.de</dc:title>
          </cc:Agent>
        </dc:creator>
        <dc:language>deutsch, german</dc:language>
        <dc:subject>
          <rdf:Bag>
            <rdf:li>Calliope mini</rdf:li>
            <rdf:li>Technik</rdf:li>
            <rdf:li>IT</rdf:li>
            <rdf:li>Elektronik</rdf:li>
            <rdf:li>Computer</rdf:li>
            <rdf:li>Programmieren</rdf:li>
            <rdf:li>Programmierung</rdf:li>
            <rdf:li>Board</rdf:li>
            <rdf:li>usb</rdf:li>
            <rdf:li>usb-cable</rdf:li>
            <rdf:li>USB-Kabel</rdf:li>
            <rdf:li>PC</rdf:li>
          </rdf:Bag>
        </dc:subject>
        <dc:description>Calliope mini - computer - usb - als svg</dc:description>
        <dc:source>openscreencast.de</dc:source>
      </cc:Work>
      <cc:License
         rdf:about="http://creativecommons.org/publicdomain/zero/1.0/">
        <cc:permits
           rdf:resource="http://creativecommons.org/ns#Reproduction" />
        <cc:permits
           rdf:resource="http://creativecommons.org/ns#Distribution" />
        <cc:permits
           rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
      </cc:License>
    </rdf:RDF>
  </metadata>
  <path
     id="platine"
     d="m 3.890517,45.560531 c 0.484504,-1.075115 0.396781,-0.925293 2.274994,-2.494785 1.878214,-1.569492 6.196367,-2.745546 9.577661,-6.014553 3.38129,-3.269006 7.68354,-9.941888 9.18023,-14.914747 1.4967,-4.972865 0.64634,-10.267517 0.44952,-13.638268 -0.19681,-3.370751 2.40179,-4.369583 2.40179,-4.369583 0,0 1.15801,-0.80388 3.30764,-0.432061 2.14964,0.371819 2.82031,0.829646 5.36607,2.522269 2.54575,1.692624 6.35759,3.46299 9.62311,4.308857 3.26551,0.845862 7.43926,1.038893 10.96911,0.622929 3.52985,-0.415964 6.57919,-2.275887 9.14487,-3.552322 2.56567,-1.276429 5.3027,-3.70136 7.31088,-4.179054 2.00817,-0.477693 3.29168,0.01431 4.53882,0.628068 1.24714,0.613739 1.70586,1.110572 2.38996,2.95175 0.68411,1.841178 -0.0774,5.890845 0.25665,9.290218 0.33405,3.399373 1.09522,7.529741 2.64162,10.920854 1.54642,3.391119 4.25496,6.312044 6.68692,8.69043 2.43196,2.378387 5.28147,4.198092 8.20578,5.622895 2.924318,1.424803 3.350478,1.617186 4.331978,2.983809 0.98149,1.366623 1.21088,2.994605 0.54108,4.75914 -0.66981,1.764534 -5.596698,4.021355 -8.065528,5.514169 -2.46884,1.492815 -6.99165,5.516339 -9.82619,9.804822 -2.83454,4.288478 -3.69708,10.788037 -4.18244,14.868299 -0.48536,4.080259 1.22139,6.784509 0.072,8.971419 -1.14935,2.18691 -3.0021,3.05557 -5.1994,3.24495 -2.1973,0.18937 -4.92861,-2.12451 -6.42108,-3.03517 -1.49247,-0.91065 -3.93756,-2.31015 -6.08819,-2.81413 -2.15063,-0.50397 -5.10439,-0.72873 -6.29479,-1.62777 -1.19041,-0.89904 -0.7847,-1.56698 -1.23821,-2.11256 -0.4535,-0.54557 -0.80995,-0.96747 -1.36648,-1.183907 -0.55653,-0.216436 -1.08989,-0.254535 -1.62132,-0.07282 -0.53144,0.181717 -1.03096,0.470417 -1.38617,1.034757 -0.35522,0.56433 0.0317,1.12111 -0.86902,1.97422 -0.90073,0.85311 -2.47762,0.49388 -4.65341,1.29115 -2.17578,0.79728 -6.06371,2.56586 -8.24138,3.79779 -2.17767,1.23194 -3.15056,2.915 -4.9077,3.342 -1.75714,0.427 -3.44916,-0.0959 -4.82573,-1.0966 -1.37656,-1.00068 -2.02248,-4.38383 -2.02049,-5.38782 0.002,-1.00399 0.46058,-6.194932 -0.38497,-10.142252 -0.84555,-3.94732 -2.2633,-8.114615 -4.28257,-11.225811 -2.01927,-3.111195 -4.76256,-5.333415 -7.25144,-7.229105 C 11.545818,55.286318 8.33632,54.386227 6.621698,52.957333 4.907076,51.52844 3.90978,50.602791 3.4938,49.238354 3.077821,47.873917 3.40598,46.635644 3.890479,45.560528 Z"
     style="fill:#25475e;fill-opacity:1;stroke:none;stroke-width:0.1490743px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1">
    <title
       id="title4070">Platine</title>
  </path>
  <ellipse
     ry="4.9313893"
     rx="4.9995027"
     cy="8.2011948"
     cx="30.079765"
     id="ecke_minus"
     style="fill:#eee489;fill-opacity:1;stroke:none;stroke-width:0.25832531;stroke-opacity:1">
    <title
       id="title192">Ecke Minus - Krokodilklemmenanschluss</title>
  </ellipse>
  <ellipse
     ry="2.22838"
     rx="2.2591591"
     cy="8.0898094"
     cx="30.002678"
     id="path4302-6"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.1167312;stroke-opacity:1" />
  <ellipse
     ry="4.9313893"
     rx="4.9995027"
     cy="7.9493394"
     cx="75.455139"
     id="ecke_plus"
     style="fill:#eee489;fill-opacity:1;stroke:none;stroke-width:0.25832531;stroke-opacity:1">
    <title
       id="title194">Ecke Plus - Krokodilklemmenanschluss für 3.3V</title>
  </ellipse>
  <ellipse
     ry="2.22838"
     rx="2.2591591"
     cy="7.8379521"
     cx="75.378052"
     id="path4302-6-9"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.1167312;stroke-opacity:1" />
  <ellipse
     ry="4.9313893"
     rx="4.9995027"
     cy="47.162285"
     cx="98.659485"
     id="ecke_p3"
     style="fill:#eee489;fill-opacity:1;stroke:none;stroke-width:0.25832531;stroke-opacity:1">
    <title
       id="title202">Ecke P3</title>
  </ellipse>
  <ellipse
     ry="2.22838"
     rx="2.2591591"
     cy="47.050896"
     cx="98.582413"
     id="path4302-6-2"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.1167312;stroke-opacity:1" />
  <ellipse
     ry="4.9313893"
     rx="4.9995027"
     cy="86.834099"
     cx="76.474197"
     id="ecke_p2"
     style="fill:#eee489;fill-opacity:1;stroke:none;stroke-width:0.25832531;stroke-opacity:1">
    <title
       id="title200">Ecke P2</title>
  </ellipse>
  <ellipse
     ry="2.22838"
     rx="2.2591591"
     cy="86.722702"
     cx="76.397125"
     id="path4302-6-0"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.1167312;stroke-opacity:1" />
  <ellipse
     ry="4.9313893"
     rx="4.9995027"
     cy="87.627228"
     cx="31.241798"
     id="ecke_p1"
     style="fill:#eee489;fill-opacity:1;stroke:none;stroke-width:0.25832531;stroke-opacity:1">
    <title
       id="title198">Ecke P1</title>
  </ellipse>
  <ellipse
     ry="2.22838"
     rx="2.2591591"
     cy="87.515839"
     cx="31.164719"
     id="path4302-6-3"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.1167312;stroke-opacity:1" />
  <ellipse
     ry="4.9313893"
     rx="4.9995027"
     cy="47.759148"
     cx="7.8388829"
     id="ecke_p0"
     style="fill:#eee489;fill-opacity:1;stroke:none;stroke-width:0.25832531;stroke-opacity:1">
    <title
       id="title196">Ecke P0</title>
  </ellipse>
  <ellipse
     ry="2.22838"
     rx="2.2591591"
     cy="47.647758"
     cx="7.7618032"
     id="path4302-6-6"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.1167312;stroke-opacity:1" />
  <rect
     y="11.162003"
     x="50.028076"
     height="7.4461451"
     width="7.20157"
     id="usb"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.1490743;stroke-opacity:1">
    <title
       id="title1142">USB Micro B Anschluss (Programmierung, Stromversorgung)</title>
  </rect>
  <rect
     y="26.543554"
     x="53.610313"
     height="2.5082183"
     width="0.59927541"
     id="02"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4091">02</title>
  </rect>
  <rect
     y="31.462849"
     x="53.610378"
     height="2.5082183"
     width="0.59927541"
     id="12"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4101">12</title>
  </rect>
  <rect
     y="36.518127"
     x="53.610378"
     height="2.5082183"
     width="0.59927541"
     id="22"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4111">22</title>
  </rect>
  <rect
     y="41.437424"
     x="53.61042"
     height="2.5082183"
     width="0.59927541"
     id="32"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4121">32</title>
  </rect>
  <rect
     y="46.399086"
     x="53.610378"
     height="2.5082183"
     width="0.59927541"
     id="42"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4131">42</title>
  </rect>
  <rect
     y="26.543554"
     x="58.462666"
     height="2.5082183"
     width="0.59927541"
     id="03"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4093">03</title>
  </rect>
  <rect
     y="31.462849"
     x="58.462666"
     height="2.5082183"
     width="0.59927541"
     id="13"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4103">13</title>
  </rect>
  <rect
     y="36.518127"
     x="58.462666"
     height="2.5082183"
     width="0.59927541"
     id="23"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4113">23</title>
  </rect>
  <rect
     y="41.437416"
     x="58.462666"
     height="2.5082183"
     width="0.59927541"
     id="33"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4123">33</title>
  </rect>
  <rect
     y="46.399086"
     x="58.462666"
     height="2.5082183"
     width="0.59927541"
     id="43"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4133">43</title>
  </rect>
  <rect
     y="26.543554"
     x="48.539349"
     height="2.5082183"
     width="0.59927541"
     id="01"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4089">01</title>
  </rect>
  <rect
     y="31.462849"
     x="48.539349"
     height="2.5082183"
     width="0.59927541"
     id="11"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4099">11</title>
  </rect>
  <rect
     y="36.518127"
     x="48.539349"
     height="2.5082183"
     width="0.59927541"
     id="21"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4109">21</title>
  </rect>
  <rect
     y="41.437416"
     x="48.539349"
     height="2.5082183"
     width="0.59927541"
     id="31"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4119">31</title>
  </rect>
  <rect
     y="46.399086"
     x="48.539349"
     height="2.5082183"
     width="0.59927541"
     id="41"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4129">41</title>
  </rect>
  <rect
     y="26.543554"
     x="63.42437"
     height="2.5082183"
     width="0.59927541"
     id="04"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4095">04</title>
  </rect>
  <rect
     y="31.462849"
     x="63.42437"
     height="2.5082183"
     width="0.59927541"
     id="14"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4105">14</title>
  </rect>
  <rect
     y="36.518127"
     x="63.42437"
     height="2.5082183"
     width="0.59927541"
     id="24"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4115">24</title>
  </rect>
  <rect
     y="41.437416"
     x="63.42437"
     height="2.5082183"
     width="0.59927541"
     id="34"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4125">34</title>
  </rect>
  <rect
     y="46.399086"
     x="63.42437"
     height="2.5082183"
     width="0.59927541"
     id="44"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4135">44</title>
  </rect>
  <rect
     y="26.543554"
     x="43.577698"
     height="2.5082183"
     width="0.59927541"
     id="00"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4087">00</title>
  </rect>
  <rect
     y="31.462849"
     x="43.577698"
     height="2.5082183"
     width="0.59927541"
     id="10"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4097">10</title>
  </rect>
  <rect
     y="36.518127"
     x="43.577698"
     height="2.5082183"
     width="0.59927541"
     id="20"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4107">20</title>
  </rect>
  <rect
     y="41.437416"
     x="43.577698"
     height="2.5082183"
     width="0.59927541"
     id="30"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4117">30</title>
  </rect>
  <rect
     y="46.399086"
     x="43.577698"
     height="2.5082183"
     width="0.59927541"
     id="40"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.13808684;stroke-opacity:1">
    <title
       id="title4127">40</title>
  </rect>
  <ellipse
     transform="matrix(0.75421528,-0.65662723,0.69943347,0.71469771,0,0)"
     ry="3.0237734"
     rx="3.5415039"
     cy="45.016479"
     cx="-13.137115"
     id="path1297"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.19184434" />
  <rect
     transform="rotate(46.255487)"
     y="12.442396"
     x="39.428463"
     height="6.4015322"
     width="6.3901811"
     id="rect4595"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.23974352;stroke-opacity:1" />
  <ellipse
     ry="0.40498772"
     rx="0.41058153"
     cy="37.963825"
     cx="18.250793"
     id="path4302-6-1"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.02121483;stroke-opacity:1" />
  <ellipse
     ry="0.40498772"
     rx="0.41058153"
     cy="41.456707"
     cx="14.471161"
     id="path4302-6-1-9"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.02121483;stroke-opacity:1" />
  <ellipse
     ry="0.40498772"
     rx="0.41058153"
     cy="45.152191"
     cx="18.017044"
     id="path4302-6-1-4"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.02121483;stroke-opacity:1" />
  <ellipse
     ry="0.40498772"
     rx="0.41058153"
     cy="41.65826"
     cx="21.901535"
     id="path4302-6-1-7"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.02121483;stroke-opacity:1" />
  <ellipse
     ry="2.2787387"
     rx="2.3102136"
     cy="41.532673"
     cx="18.182304"
     id="knopfa"
     style="fill:#00bcdd;fill-opacity:1;stroke:none;stroke-width:0.11936919;stroke-opacity:1">
    <title
       id="title172">Knopf A - programmierbar</title>
  </ellipse>
  <ellipse
     transform="matrix(-0.75421527,-0.65662723,-0.69943347,0.71469771,0,0)"
     ry="3.0237734"
     rx="3.5415039"
     cy="-25.817919"
     cx="-88.916763"
     id="path1297-2"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.19184433" />
  <rect
     transform="rotate(46.255487)"
     y="-38.883652"
     x="87.332695"
     height="6.4015322"
     width="6.3901811"
     id="rect4595-4"
     style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.23974353;stroke-opacity:1" />
  <ellipse
     ry="0.40498772"
     rx="0.41058153"
     cy="37.082211"
     cx="88.453369"
     id="path4302-6-1-5"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.02121483;stroke-opacity:1" />
  <ellipse
     ry="0.40498772"
     rx="0.41058153"
     cy="40.575092"
     cx="84.673737"
     id="path4302-6-1-9-0"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.02121483;stroke-opacity:1" />
  <ellipse
     ry="0.40498772"
     rx="0.41058153"
     cy="44.270573"
     cx="88.21962"
     id="path4302-6-1-4-3"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.02121483;stroke-opacity:1" />
  <ellipse
     ry="0.40498772"
     rx="0.41058153"
     cy="40.776646"
     cx="92.104111"
     id="path4302-6-1-7-6"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.02121483;stroke-opacity:1" />
  <ellipse
     ry="2.2787387"
     rx="2.3102136"
     cy="40.651058"
     cx="88.384888"
     id="knopfb"
     style="fill:#e95262;fill-opacity:1;stroke:none;stroke-width:0.11936919;stroke-opacity:1">
    <title
       id="title174">Knopf B - programmierbar</title>
  </ellipse>
  <g
     transform="matrix(0.56343044,0,0,0.56343044,-8.598309,-59.447993)"
     id="verbindungsstecker_a0">
    <title
       id="title188">Verbindungs-Stecker A0 - Grove-Connector</title>
    <rect
       style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.32808203;stroke-opacity:1"
       id="rect4408-0"
       width="10.415204"
       height="24.937338"
       x="127.11486"
       y="94.682167"
       transform="rotate(30.055793)" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.03765297;stroke-opacity:1"
       id="path4302-6-1-6"
       cx="63.853874"
       cy="153.21654"
       rx="0.72871733"
       ry="0.71878922" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.03765297;stroke-opacity:1"
       id="path4302-6-1-6-3"
       cx="61.925835"
       cy="157.07407"
       rx="0.72871733"
       ry="0.71878922" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.03765297;stroke-opacity:1"
       id="path4302-6-1-6-3-2"
       cx="60.049469"
       cy="160.68706"
       rx="0.72871733"
       ry="0.71878922" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.03765297;stroke-opacity:1"
       id="path4302-6-1-6-3-0"
       cx="58.045006"
       cy="164.17775"
       rx="0.72871733"
       ry="0.71878922" />
  </g>
  <g
     id="verbindungsstecker_a1"
     transform="matrix(0.29212256,-0.48178654,0.48178654,0.29212256,-14.189152,12.623407)">
    <title
       id="title190">Verbindungs-Stecker A1 - Grove-Connector</title>
    <rect
       style="fill:#c8c8c8;fill-opacity:1;stroke:none;stroke-width:0.32808203;stroke-opacity:1"
       id="rect4408-0-1"
       width="10.415204"
       height="24.937338"
       x="127.11486"
       y="94.682167"
       transform="rotate(30.055793)" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.03765297;stroke-opacity:1"
       id="path4302-6-1-6-5"
       cx="63.853874"
       cy="153.21654"
       rx="0.72871733"
       ry="0.71878922" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.03765297;stroke-opacity:1"
       id="path4302-6-1-6-3-5"
       cx="61.925835"
       cy="157.07407"
       rx="0.72871733"
       ry="0.71878922" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.03765297;stroke-opacity:1"
       id="path4302-6-1-6-3-2-4"
       cx="60.049469"
       cy="160.68706"
       rx="0.72871733"
       ry="0.71878922" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.03765297;stroke-opacity:1"
       id="path4302-6-1-6-3-0-7"
       cx="58.045006"
       cy="164.17775"
       rx="0.72871733"
       ry="0.71878922" />
  </g>
  <ellipse
     ry="1.9559932"
     rx="1.4551616"
     cy="14.496822"
     cx="61.542343"
     id="reset"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.08777244;stroke-opacity:1">
    <title
       id="title168">Reset-Knopf</title>
  </ellipse>
  <rect
     transform="matrix(0.83424255,0.55139765,-0.50958116,0.86042259,0,0)"
     y="-6.7832327"
     x="93.762878"
     height="10.570351"
     width="12.073917"
     id="lautsprecher"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.16911185;stroke-opacity:1">
    <title
       id="title180">Piezo-Lautsprecher</title>
  </rect>
  <rect
     transform="rotate(46.564531)"
     y="9.7164316"
     x="67.72065"
     height="6.7663298"
     width="6.7663298"
     id="prozessor"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.15122876;stroke-opacity:1">
    <title
       id="title184">32-bit ARM Cortex M0 processor (16MHz), 16kB RAM, 256kB Flash, Bluetooth Low Energy</title>
  </rect>
  <rect
     transform="rotate(0.64040907)"
     y="55.183193"
     x="52.998272"
     height="3.2479427"
     width="3.2479427"
     id="rect4821-6"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.07259213;stroke-opacity:1" />
  <ellipse
     ry="1.2140988"
     rx="1.2308685"
     cy="57.25441"
     cx="53.920456"
     id="rgbled"
     style="fill:#c8d2d2;fill-opacity:1;stroke:none;stroke-width:0.06359921;stroke-opacity:1">
    <title
       id="title182">Programmierbare RGB LED</title>
  </ellipse>
  <rect
     y="54.304558"
     x="66.469849"
     height="7.8039289"
     width="4.1664691"
     id="rect4868"
     style="fill:#eac169;fill-opacity:1;stroke:none;stroke-width:0.18170632;stroke-opacity:1" />
  <rect
     transform="matrix(0.87619329,0.48195987,-0.47272332,0.88121091,0,0)"
     y="14.246325"
     x="98.390762"
     height="9.2234249"
     width="6.7233295"
     id="batterie"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.25093868;stroke-opacity:1">
    <title
       id="title186">JST Batterieanschluss (3.3V)</title>
  </rect>
  <g
     transform="matrix(0.56343044,0,0,0.56343044,-8.598309,-59.149844)"
     id="g5143">
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885"
       cx="100.79944"
       cy="228.65224"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2"
       cx="106.0911"
       cy="228.65224"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5"
       cx="111.38277"
       cy="228.65224"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4"
       cx="116.67444"
       cy="228.65224"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-7"
       cx="121.9661"
       cy="228.65224"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-4"
       cx="100.79944"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-4"
       cx="106.09111"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-3"
       cx="111.38277"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-0"
       cx="116.67444"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-7-7"
       cx="121.96611"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-4-8"
       cx="100.79944"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-4-6"
       cx="106.09111"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-3-8"
       cx="111.38277"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-0-8"
       cx="116.67444"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-7-7-4"
       cx="121.96611"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-4-3"
       cx="127.25777"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-3-1"
       cx="132.54942"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-0-4"
       cx="137.84109"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-7-7-9"
       cx="143.13277"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-4-6-2"
       cx="127.25777"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-3-8-0"
       cx="132.54942"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-0-8-6"
       cx="137.84109"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-7-7-4-8"
       cx="143.13277"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-4-3-9"
       cx="79.632767"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-3-1-2"
       cx="84.924423"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-0-4-6"
       cx="90.216095"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-7-7-9-6"
       cx="95.507759"
       cy="238.44182"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-4-6-2-4"
       cx="79.632767"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-3-8-0-9"
       cx="84.924423"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-0-8-6-5"
       cx="90.216095"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
    <ellipse
       style="fill:#000000;fill-opacity:1;stroke:#ecdf8a;stroke-width:0.26458332;stroke-opacity:1"
       id="path4885-2-5-4-7-7-4-8-0"
       cx="95.507759"
       cy="243.73347"
       rx="1.4483957"
       ry="1.5404671" />
  </g>
  <text
     transform="matrix(0.6256878,0.77274345,-0.81191607,0.59550015,0,0)"
     id="text113"
     y="17.203327"
     x="68.309448"
     style="font-style:normal;font-weight:normal;font-size:2.42020297px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.06050507"
     xml:space="preserve"><tspan
       style="fill:#ffffff;fill-opacity:1;stroke-width:0.06050507"
       y="17.203327"
       x="68.309448"
       id="tspan111">CALLIOPE</tspan><tspan
       id="tspan115"
       style="font-size:4.83199692px;line-height:1.25;fill:#ffffff;fill-opacity:1;stroke-width:0.06050507"
       y="22.362453"
       x="68.309448">mini</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924"
     y="67.880737"
     x="48.544655"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="67.880737"
       x="48.544655"
       id="tspan922">PROZESSOR</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-3"
     y="72.157257"
     x="61.654243"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="72.157257"
       x="61.654243"
       id="tspan922-6">BATTERIE</tspan></text>
  <rect
     y="41.133011"
     x="25.837952"
     height="3.5216949"
     width="5.3362088"
     id="lagesensor"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.11370311">
    <title
       id="title176">Lagesensor (Beschleunigungssensor, Gyroskop, Magnetometer - Bosch BMX055)</title>
  </rect>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-5"
     y="50.051659"
     x="14.324402"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="50.051659"
       x="14.324402"
       id="tspan922-3">LAGESENSOR</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-56"
     y="19.121161"
     x="58.110451"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="19.121161"
       x="58.110451"
       id="tspan922-2">RESET</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-9"
     y="20.843237"
     x="51.238289"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="20.843237"
       x="51.238289"
       id="tspan922-1">USB</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-3-2"
     y="51.851707"
     x="58.169807"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="51.851707"
       x="58.169807"
       id="tspan922-6-7">LAUTSPRECHER</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-3-0"
     y="54.783447"
     x="49.23632"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="54.783447"
       x="49.23632"
       id="tspan922-6-9">RGB LED</tspan></text>
  <rect
     transform="scale(-1,1)"
     y="44.961681"
     x="-29.419975"
     height="4.7703776"
     width="0.1490743"
     id="rect1136"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.09824006" />
  <rect
     transform="matrix(-0.74593836,0.66601499,0.6838884,0.72958664,0,0)"
     y="75.220398"
     x="12.576113"
     height="5.4181333"
     width="0.15754135"
     id="rect1136-6"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.1076299" />
  <rect
     transform="rotate(90)"
     y="-47.555649"
     x="67.068916"
     height="1.7888917"
     width="0.13975717"
     id="rect1136-3-0"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.05824919" />
  <rect
     transform="matrix(0,-1,-1,0,0,0)"
     y="-75.856384"
     x="-71.223244"
     height="3.7041669"
     width="0.1490743"
     id="rect1136-3-0-6"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.08656801" />
  <rect
     transform="matrix(0.67894196,0.73419194,0.74143426,-0.67102551,0,0)"
     y="7.0176678"
     x="103.52352"
     height="2.6468494"
     width="0.076722242"
     id="rect1136-6-2"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.0524972" />
  <rect
     transform="matrix(0,-1,-1,0,0,0)"
     y="-78.430298"
     x="-50.999672"
     height="2.9104168"
     width="0.1490743"
     id="rect1136-3-0-6-6"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.07673435" />
  <rect
     transform="rotate(90)"
     y="-59.622833"
     x="57.64978"
     height="2.9814861"
     width="0.13975717"
     id="rect1136-3-0-1"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.07519938" />
  <rect
     transform="scale(-1,1)"
     y="53.883446"
     x="-59.650299"
     height="3.7268577"
     width="0.1490743"
     id="rect1136-8"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.08683276" />
  <rect
     transform="scale(-1,1)"
     y="14.57872"
     x="-65.299377"
     height="3.7268577"
     width="0.1490743"
     id="rect1136-8-7"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.08683276" />
  <rect
     transform="rotate(90)"
     y="-65.131027"
     x="14.528641"
     height="1.490743"
     width="0.13975717"
     id="rect1136-3-0-1-9"
     style="fill:#f0f0f0;fill-opacity:1;stroke:none;stroke-width:0.05317399" />
  <text
     transform="scale(0.99599154,1.0040246)"
     id="text924-5-2"
     y="40.617249"
     x="22.274799"
     style="font-style:normal;font-weight:normal;font-size:2.91677856px;font-family:sans-serif;fill:#25475e;fill-opacity:1;stroke:none;stroke-width:0.07291945"
     xml:space="preserve"><tspan
       style="fill:#25475e;fill-opacity:1;stroke-width:0.07291945"
       y="40.617249"
       x="22.274799"
       id="tspan922-3-0">A</tspan></text>
  <text
     transform="scale(0.99599154,1.0040246)"
     id="text924-5-2-3"
     y="39.899891"
     x="82.678467"
     style="font-style:normal;font-weight:normal;font-size:2.91677856px;font-family:sans-serif;fill:#25475e;fill-opacity:1;stroke:none;stroke-width:0.07291945"
     xml:space="preserve"><tspan
       style="fill:#25475e;fill-opacity:1;stroke-width:0.07291945"
       y="39.899891"
       x="82.678467"
       id="tspan922-3-0-7">B</tspan></text>
  <text
     transform="scale(0.59994355,1.6668235)"
     id="text924-5-22"
     y="5.9661722"
     x="60.042988"
     style="font-style:normal;font-weight:normal;font-size:3.31975889px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.08299395"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.08299395"
       y="5.9661722"
       x="60.042988"
       id="tspan922-3-8">--</tspan></text>
  <text
     transform="scale(0.99594441,1.0040721)"
     id="text924-5-6"
     y="8.9752407"
     x="68.245399"
     style="font-style:normal;font-weight:normal;font-size:2.71802807px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.0679507"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.0679507"
       y="8.9752407"
       x="68.245399"
       id="tspan922-3-1">+</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-5-29"
     y="53.894745"
     x="10.648422"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       id="tspan1445"
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="53.894745"
       x="10.648422">0</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-5-29-1"
     y="87.650131"
     x="37.070763"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       id="tspan1445-9"
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="87.650131"
       x="37.070763">1</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-5-29-4"
     y="87.8713"
     x="69.627495"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       id="tspan1479"
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="87.8713"
       x="69.627495">2</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-5-29-4-8"
     y="53.355263"
     x="94.750587"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       id="tspan1479-4"
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="53.355263"
       x="94.750587">3</tspan></text>
  <rect
     y="14.925896"
     x="35.286865"
     height="5.0761003"
     width="5.5205512"
     id="rect1062-5"
     style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.13884696" />
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-5-0"
     y="31.356062"
     x="29.616447"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="31.356062"
       x="29.616447"
       id="tspan922-3-6">A0</tspan></text>
  <text
     transform="scale(1.0006698,0.99933065)"
     id="text924-5-0-3"
     y="31.371004"
     x="73.625862"
     style="font-style:normal;font-weight:normal;font-size:1.55164218px;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.03879105"
     xml:space="preserve"><tspan
       style="font-size:2.11666679px;fill:#ffffff;fill-opacity:1;stroke-width:0.03879105"
       y="31.371004"
       x="73.625862"
       id="tspan922-3-6-2">A1</tspan></text>
  <rect
     y="31.965374"
     x="68.1427"
     height="2.2892773"
     width="3.1805387"
     id="mikrofon"
     style="fill:#eae798;fill-opacity:1;stroke:none;stroke-width:0.08598622;stroke-opacity:1">
    <title
       id="title178">MEMS Mikrofon</title>
  </rect>
</svg>

</div>

<script src="js/happyworld.js"></script>

{% endif %}


