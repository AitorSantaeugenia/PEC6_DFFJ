a) Què són els interceptors?
b) Analitza la següent cadena d'operadors de RxJS, explica cadascun dels passos
que s'estan desenvolupant i explica en quin cas faries servir aquest codi:

this.wines$ = this.searchSubject
 .startWith(this.searchTerm)
 .debounceTime(300)
 .distinctUntilChanged()
 .merge(this.reloadProductsList)
 .switchMap((query) =>
this.wineService.getWine(this.searchTerm));