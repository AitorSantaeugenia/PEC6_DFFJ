### Exercici 3 – Preguntes teòriques sobre interceptors

#### a) Què són els interceptors?
- S'utilitzen per centralitzar i modularitzar la lògica relacionada amb les sol·licituds i respostes HTTP en una aplicació. Ens permeten evitar repetir codi en múltiples parts de la teva aplicació i acomplir tasques comunes de manera consistent en totes les sol·licituds i respostes HTTP.

#### b) Analitza la següent cadena d'operadors de RxJS, explica cadascun dels passos que s'estan desenvolupant i explica en quin cas faries servir aquest codi:

- Aquesta cadena d'operadors RxJS està relacionada amb la gestió de la cerca de vins d'una aplicació. 
    - .startWith(this.searchTerm): Emet un valor abans d'iniciar subscripció al this.searchSubject.
    - debounceTime(300): Fa que l'observable esperi 300 mil·lisegons en rebre l'últim esdeveniment.
    - distinctUntilChanged(): Evita que l'observable emeti un altre valor si és igual a l'anterior.
    - merge(this.reloadProductsList): Combina l'observable actual amb un altre observable (this.searchSubject amb this.realoadProductsList)
    - switchMap((query) => this.wineService.getWine(this.searchTerm)): S'utilitzarà per cancel·lar crides HTTP anteriors quan hi hagi un nou esdeveniment.
- Així doncs, aquesta cadena d'operadors estarà dissenyada per gestionar una certa recerca de vins, optimitzant crides al servidor.

```ts
this.wines$ = this.searchSubject
 .startWith(this.searchTerm)
 .debounceTime(300)
 .distinctUntilChanged()
 .merge(this.reloadProductsList)
 .switchMap((query) =>
this.wineService.getWine(this.searchTerm));
```
