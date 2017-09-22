# Calliope mini und Python

### Vorbereitung 

* NodeJS installieren
* Gitbook installieren: `npm install gitbook-cli -g`

### Anwendung

```
# Vorschau http://localhost:4000
cd book
gitbook install
gitbook serve

# Gitbook erstellen (statische Webseite)
cd book
gitbook install
gitbook build
```

### Konfiguration

book/book.json
{
	"variables": {
	  "video": true,
      "story": true,
	  "storycss": "",
	  "book": true
  }
}

* video: true,false - Videoteil aktivieren/deaktivieren
* story: true,false - Storyteil aktivieren/deaktivieren
* book: true,false - Buchteil aktivieren/deaktivieren
* storycss: - CSS-Style für den Storyteil festlegen

### Software

* [GitBook](https://github.com/GitbookIO/gitbook) by [GitBook](https://github.com/GitbookIO), Lizenz: [Apache License](https://github.com/GitbookIO/gitbook/blob/master/LICENSE)
* [theme-default](https://github.com/GitbookIO/theme-default) by [GitBook](https://github.com/GitbookIO), Lizenz: [Apache License](https://github.com/GitbookIO/theme-default/blob/master/LICENSE)
* [plugin-fontsettings](https://github.com/GitbookIO/plugin-fontsettings) by [GitBook](https://github.com/GitbookIO), Lizenz: [Apache License](https://github.com/GitbookIO/plugin-fontsettings/blob/master/LICENSE)
* [plugin-highlight](https://github.com/GitbookIO/plugin-highlight) by [GitBook](https://github.com/GitbookIO), Lizenz: Apache 2
* [plugin-lunr](https://github.com/GitbookIO/plugin-lunr) by [GitBook](https://github.com/GitbookIO), Lizenz: [Apache License](https://github.com/GitbookIO/plugin-lunr/blob/master/LICENSE)
* [plugin-search](https://github.com/GitbookIO/plugin-search) by [GitBook](https://github.com/GitbookIO), Lizenz: [Apache License](https://github.com/GitbookIO/plugin-search/blob/master/LICENSE)
* [plugin-sharing](https://github.com/GitbookIO/plugin-sharing) by [GitBook](https://github.com/GitbookIO), Lizenz: [Apache License](https://github.com/GitbookIO/plugin-sharing/blob/master/LICENSE)
* [plugin-accordion](https://github.com/artalar/gitbook-plugin-accordion) by [artalar](https://github.com/artalar), Lizenz: The MIT License
* http://fontawesome.io created by [Dave Gandy](https://twitter.com/davegandy), licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL), Code licensed under [MIT License](http://opensource.org/licenses/mit-license.html)


# Status

in Arbeit

# Lizenz

Creative Commons Zero https://creativecommons.org/publicdomain/zero/1.0/
