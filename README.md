SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 1: XS

# TYP1A
Autore: Gizzi Andrea  
[Typia](https://andrea-gizzi.github.io/TYP1A/)

## Introduzione e tema
La consegna consisteva nella realizzazione di un sistema di interfaccia web interattiva che consentisse di esplorare 100 elementi legati da un tema comune, scelti e autoprodotti. 

Nel mio caso è stato realizzato un archivio interattivo contenente i 100 font più utilizzati al mondo. L'obiettivo principale dell'interfaccia è facilitare la scelta del font più adatto e approfondirne le informazioni. L'utente ha la possibilità di esplorare i diversi font, inserire una lettera specifica per confrontare le variazioni tra i font, visualizzare i metadati e selezionare le categorie di interesse.


## Riferimenti progettuali
Nel progetto, non sono stati utilizzati riferimenti progettuali precisi, l'interfaccia è stata costruita in base alle esigenzze del progetto al fine di avere un'approccio visivo che valorizzasse ogni singolo contenuto in base alla ricerca in corso, rendendolo funzionale e facilmente leggibile. L'unico riferimento sfruttato è stato quello dell'archivio digitale di daFont, interfaccia che permette di visualizzare in amplia scala molteplici font suddivisi in molteplici categorie.

[<img src="documentazione/daFont_home.jpg" width="300">]()    [<img src="documentazione/daFont_SansSerif.jpg" width="300">]()



## Design dell’interfraccia e modalià di interazione
L'intero archivio digitale è stato realizzato in modo tale da avere una buona ergonomia atraverso semplicità, leggibilità e coerenza. 
L'interfaccia presenta una struttura uniforme in tutte le sue pagine:
- Header, situato nella parte superiore, include bottoni intuitivi per: la navigazione, la selezione dei filtri e per il ritorno alla pagina principale del corso, ed infine nella pagina principale un input per specificare la lettera da visualizzare.
- Contenuti: centralizzati al centro della pagina, rendendo facile l'accesso e la comprensione dei materiali informativi.
- Footer: collocato nella parte inferiore, contiene informazioni sul corso e il nome dell'archivio.

L'interfaccia offre diverse modalità di interazione: 
- Utilizzo di bottoni per navigare tra le pagine e per filtrare i contenuti.
- Input per selezionare la lettera da visualizzare nel rendering.
- Visualizzazione dei metadati attraverso un overlay sull'immagine, che temporaneamente sostituisce l'immagine con i dettagli pertinenti su uno sfondo nero.

Inoltre è presente una pagina dedicata ai metadati, progettata per fornire un accesso diretto e immediato alle informazioni, senza la necessità di navigare tra le immagini.
Questo design mira a garantire un'esperienza utente chiara e efficiente, facilitando sia l'esplorazione dettagliata che l'accesso rapido alle informazioni essenziali.


## Tecnologia usata
L'intero sito è strutturato sulla rappresentazione dei metadati in varie categorie permettendo all'utente di decidere quale categoria vuole vedere tramite i bottoni che fungono da filtro. La struttura delle categorie nella home è stata scelta per facilitare il confronto tra i font permettendo all'utente maggiore comprensione delle minime differenze, permettendo cosi la funzione corretta dei filtri.


```JavaScript
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```

## Target e contesto d’uso
L'artefatto digitale è concepito per un pubblico giovane e dinamico, principalmente attivo nel campo della grafica. Si rivolge a coloro che devono selezionare un carattere tipografico adatto a specifici contesti di utilizzo, o che sono interessati a informarsi ed esplorare il vasto archivio dei metadati di ogni font. Il contesto d'utilizzo dell'archivio è diversificato e variegato. Una versione più prestante e espansa può essere sfruttata a fini educativi e accademici, per uso personale o in ambito professionale, come ad esempio in studi di design grafico o per progetti indipendenti.

[<img src="doc/munari.jpg" width="300" alt="Supplemento al dizionario italiano">]()
