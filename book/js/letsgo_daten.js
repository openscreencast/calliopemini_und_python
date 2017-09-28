var schritte = [

	{ id: 1,
	  text: "***** Der schurkische Dr. Malsana *****<br><br>Dr. Malsana und seine Orks bedrohen die Welt. Man munkelt, er sei durch ein Portal in unsere Welt gekommen. Du bist mitten in einem Abenteuer und versuchst zu verhindern, dass Dr. Malsana die Weltherrschaft an sich reißt. Hinweise führten dich zu einer geheimnisvollen Villa, Bitstreet 42. Dort soll eine Apparatur sein, die dabei hilft, Dr. Malsana aufzuhalten. Es ist Mitternacht.",
	  handlung: "",
	  ziele: [2,3],
	  image: "images/letsgo_villa_nacht.jpg"
	},
	{ id: 2,
	  text: "Rechts neben der Tür hängt ein altes, vermodertes Holzschild. Auf dem Schild steht Turing. Die Tür ist verschlossen. Eine Klingel ist nirgends zu finden. Nach 2 Minuten klopfen tut sich immer noch nichts. Du lauschst an der Tür und hörst recht merkwürdige Geräusche.",
	  handlung: "Du gehst zur Tür der Villa.",
	  ziele: [3],
	  image: "images/letsgo_door_night.jpg"
	},
	{ id: 3,
	  text: "Du öffnest die Luke und kriechst hinein. Auf einmal schnappt die Luke hinter dir automatisch zu. Die Luke ist verschlossen.",
	  handlung: "Du gehst zur Kellerluke der Villa.",
	  ziele: [4],
	  image: "images/letsgo_small_door.jpg"
	},
	{ id: 4,
	  text: "Im Keller sieht es wie in einem Makerspace aus. Sehr alte Möbel stehen hier aber auch herum. Nicht zu übersehen ist die Überschrift auf der riesigen Tafel an der Wand: 'Die Welt retten !'. Hier bist du anscheinend genau richtig. Die Tafel verrät dir was du brauchst, zur Rettung der Welt vor der Schreckensherrschaft des schurkischen Dr. Malsana. Du musst die aufgelisteten Utensilien (Calliope mini, USB-Kabel, Buch: Calliope mini und Python) jetzt nur noch finden. Einen Laptop, ein Smartphone und eine Zubehörbox hast du schon bei deinen anderen Sachen, im Rucksack.",
	  handlung: "Du schaust dich im Keller um.",
	  ziele: [5,6,7],
	  image: "images/letsgo_blackboard.jpg"
	},
	{ id: 5,
	  text: "Du entdeckst ein Klavier und viel Klimbim.",
	  handlung: "Du gehst in den Raum mit der Aufschrift: Ada.",
	  ziele: [9],
	  image: "images/letsgo_ada.jpg",
	  alt: true,
	  alttext: " Nach langem Stöbern wirst du fündig. Das Buch: Calliope Mini und Python ist unter dem Hut verborgen.",
	  altziele: [8]				
	},
	{ id: 6,
	  text: "Tohuwabohu ! Das ist das erste was dir bei diesem Blick einfällt. Hier ist es megachaotisch.",
	  handlung: "Du gehst in den Raum mit der Aufschrift: Marlyn.",
	  ziele: [9],
	  image: "images/letsgo_room_chaos.jpg",
	  alt: true,
	  alttext: " Nach kurzem Herumkramen erspäst du das USB-Kabel, das dir fehlt.",
	  altziele: [10]					
	},
	{ id: 7,
	  text: "Du erblickst alte Kisten und Fässer. Hinter den Fässern findest du eine Truhe. Auf der Truhe steht - TOP SECRET !",
	  handlung: "Du gehst in den Raum mit der Aufschrift: Grace.",
	  ziele: [9],
	  image: "images/letsgo_room_chest.jpg",
	  alt: true,
	  alttext: " Die Truhe ist elektronisch verschlossen. Nur wenn du das richtige Passwort eingibst öffnet sich die Truhe.",
	  altziele: [11]				
	},
	{ id: 8,
	  text: "In diesem Buch findest du die Anleitung wie man den Calliope mini mit Python programmieren kann.",
	  handlung: "Du nimmst dir das Buch: Calliope mini und Python und steckst es in deinen Rucksack.",
	  ziele: [9],
	  image: "images/letsgo_book.jpg",
	  gegenstand: "Buch: Calliope mini und Python",
	  entf: [5]				
	},
	{ id: 9,
	  text: "Im Keller sieht es wie in einem Makerspace aus. Sehr alte Möbel stehen hier aber auch herum. Nicht zu übersehen ist die Überschrift auf der riesigen Tafel an der Wand: 'Die Welt retten !'. Die Tafel verrät dir was du brauchst, zur Rettung der Welt vor der Schreckensherrschaft des schurkischen Dr. Malsana. Du musst die aufgelisteten Utensilien (Calliope mini, USB-Kabel, Buch: Calliope mini und Python) finden. Einen Laptop, ein Smartphone und eine Zubehörbox hast du schon bei deinen anderen Sachen, im Rucksack.",
	  handlung: "Du gehst zurück in den Raum mit der Tafel.",
	  ziele: [5,6,7],
	  image: "images/letsgo_blackboard.jpg"
	},
	{ id: 10,
	  text: "Jetzt hast du das richtige Kabel um deinen Laptop mit dem Calliope mini zu verbinden.",
	  handlung: "Du schnappst dir das USB-Kabel und packst es in deinen Rucksack.",
	  ziele: [9],
	  image: "images/letsgo_usb.jpg",
	  gegenstand: "USB-Kabel",
	  entf: [6]				
	},
    { id: 11,
	  text: "An der linken Seite der Truhe klebt ein Notizzettel mit den Buchstaben: zvav. Ist das das Passwort ? Oder ist es das Passwort, nur verschlüsselt ? Vielleicht gab es zu dem Verschlüsselungsalorithmus einen Hinweis auf der Tafel. Mit deinem Laptop oder Smartphone kannst du im Internet (z.B. bei Wikipedia) nach Informationen suchen. Eingabedisplay - Passwort: <input oninput='checkpassword();' type='text' id='passwort' name='passwort'>",
	  handlung: "Du gibst das Passwort ein, um die Truhe zu öffnen.",
	  ziele: [9],
	  image: "images/letsgo_chest.jpg"
	},
	{ id: 12,
	  text: "Hinter der Tafel entdeckst du eine Tür mit einer Linse. Unter der Linse steht: Passbild eingeben ! Die Tür ist verriegelt und kann offensichtlich nur mit dem korrekten Bild vor der Linse geöffnet werden. Fürs Erste kannst du hier nicht weg. Du beschließt dich erst einmal mit dem Calliope mini zu beschäftigen. Denn je eher du verstehst wie man mit dem Calliope umgeht, desto früher kannst du deine Familie und Freunde vor Dr. Malsana und seinen Orks retten. Das Buch 'Calliope mini und Python' erklärt dir die Funktionsweise und wie man den Calliope mini programmiert.<br><br>> <a href='bereit_ja.html' style='color: #87CEFA;'>Du liest das Buch 'Calliope mini und Python'.</a>",
	  handlung: "",
	  ziele: [],
	  image: "images/letsgo_door_lens.jpg"
	},
	{ id: 13,
	  text: "Innerhalb der Truhe findest du den Calliope mini. Der Calliope mini gehört nun zu deinen Utensilien.",
	  handlung: "",
	  ziele: [9],
	  image: "images/letsgo_calliopemini.jpg",
	  gegenstand: "Calliope mini",
	  entf: [7]
	}


		]
