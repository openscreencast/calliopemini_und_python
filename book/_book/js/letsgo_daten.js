var schritte = [

	{ id: 1,
	  text: "***** Der schurkische Dr. Malsana *****<br><br>Dr. Malsana und seine Orks bedrohen die Welt. Man munkelt, er sei durch ein Portal in unsere Welt gekommen. Du bist mitten in einem Abenteuer und versuchst zu verhindern, dass Dr. Malsana die Weltherrschaft an sich reißt. Hinweise führten dich zu einer geheimnisvollen Villa. Dort soll eine Apparatur sein, die dabei hilft, Dr. Malsana aufzuhalten. Es ist Mitternacht.",
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
	  text: "Im Keller sieht es wie in einem Makerspace aus. Sehr alte Möbel stehen hier aber auch herum. Nicht zu übersehen ist die Überschrift auf der Tafel: 'Die Welt retten !'. Hier bist du anscheinend genau richtig. Die Tafel verrät dir was du brauchst, zur Rettung der Welt vor der Schreckensherrschaft des schurkischen Dr. Malsana. Du musst die aufgelisteten Utensilien (Calliope mini, USB-Kabel, Zubehörbox, Buch: Calliope mini und Python) jetzt nur noch finden. Einen Laptop hast du schon bei deinen anderen Sachen, im Rucksack.",
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
	  alttext: "Nach langem Stöbern wirst du fündig. Die Zubehörbox ist unter dem Hut verborgen.",
	  altziele: [8]				
	},
	{ id: 6,
	  text: "Tohuwabohu ! Das ist das erste was dir bei diesem Blick einfällt. Hier ist es megachaotisch.",
	  handlung: "Du gehst in den Raum mit der Aufschrift: Marlyn.",
	  ziele: [9],
	  image: "images/letsgo_room_chaos.jpg",
	  alt: true,
	  alttext: "Nach kurzem Herumkramen erspäst du das USB-Kabel, das dir fehlt.",
	  altziele: [10]					
	},
	{ id: 7,
	  text: "Du erblickst alte Kisten und Fässer. Hinter den Fässern findest du eine Truhe. Auf der Truhe steht - TOP SECRET !",
	  handlung: "Du gehst in den Raum mit der Aufschrift: Grace.",
	  ziele: [9],
	  image: "images/letsgo_room_chest.jpg",
	  alt: true,
	  alttext: "Die Truhe ist elektronisch verschlossen. Nur wenn du das richtige Passwort eingibst öffnet sich die Truhe.",
	  altziele: [11]				
	},
	{ id: 8,
	  text: "In dieser alten Box wird eine Menge Zubehör für den Calliope mini aufbewahrt.",
	  handlung: "Du nimmst dir die Zubehörbox und steckst sie in deinen Rucksack.",
	  ziele: [9],
	  image: "images/letsgo_toolbox.jpg",
	  gegenstand: "Zubehörbox",
	  entf: [5]				
	},
	{ id: 9,
	  text: "Im Keller sieht es wie in einem Makerspace aus. Sehr alte Möbel stehen hier aber auch herum. Nicht zu übersehen ist die Überschrift auf der Tafel: 'Die Welt retten !'. Die Tafel verrät dir was du brauchst, zur Rettung der Welt vor der Schreckensherrschaft des schurkischen Dr. Malsana. Du musst die aufgelisteten Utensilien (Calliope mini, USB-Kabel, Zubehörbox, Buch: Calliope mini und Python) finden. Einen Laptop hast du schon bei deinen anderen Sachen, im Rucksack.",
	  handlung: "Du gehst zurück in den Raum mit der Tafel.",
	  ziele: [5,6,7],
	  image: "images/letsgo_blackboard.jpg"
	},
	{ id: 10,
	  text: "",
	  handlung: "Du schnappst dir das USB-Kabel und packst es in deinen Rucksack.",
	  ziele: [9],
	  image: "images/letsgo_usb.jpg",
	  gegenstand: "USB-Kabel",
	  entf: [6]				
	},
    { id: 11,
	  text: "An der linken Seite der Truhe klebt ein Notizzettel mit den Buchstaben: zvav. Ist das das Passwort ? Oder ist es das Passwort, nur verschlüsselt ? Vielleicht gab es zu dem Verschlüsselungsalorithmus einen Hinweis auf der Tafel. Mit deinem Laptop kannst du im Internet (z.B. bei Wikipedia) nach Informationen suchen.",
	  handlung: "Du gibst das Passwort ein, um die Truhe zu öffnen.",
	  ziele: [9],
	  image: "",
	  gegenstand: "",
	  entf: [7]
	},
	{ id: 12,
	  text: "Ende",
	  handlung: "Ende",
	  ziele: [],
	  image: ""
	}


		]
