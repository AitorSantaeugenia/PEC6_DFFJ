### Exercici 1 - Preguntes teòriques sobre serveis Angular

#### a) Quina és la funció dels components i serveis? (i.e. quan s'ha d'utilitzar cadascun)
- <ins>Components</ins>: Responsables de la presentació i la lògica de la interfície d'usuari. Cada component encapsula una part i està compost per una plantilla *HTML*, un controlador i un full d'estils en cascada (*CSS*). Útil per a codi que s'ha de repetir en diferents pàgines.<br>
Es solen emprar per construir la interfície d'usuari de l'aplicació.

- <ins>Serveis</ins>: Són objectes responsables de construir la interfície d'usuari de l'aplicació. Poden contenir lògica de presentació i manipulació de dades i s'empren per dividir la interfície en parts més petites i manejables.<br>
Es solen usar quan es necessita compartir certa lògica de dades entre components, quan s'han de fer operacions asíncrones com trucades d'API, o per a la reutilització del codi.

#### b) Què és la <<injecció de dependències>>? Per què serveix el decorador @Injectable?
- La injecció de dependències és un patró de disseny que s'empra per gestionar les dependències entre components d'una aplicació, és la forma en el qual els objectes o serveis necessaris són proporcionats a altres objectes que els requereixen. En Angular sol ser un mètode eficaç per mantenir d'una forma més eficient les dependències de l'aplicació.
- El decorador @Injectable s'utilitza per indicar que una classe pot ser injectada com a dependència en altres components o serveis. Si un servei porta aquest decorador, Angular permet crear una instància d'aquest servei/component per proporcionar-la als components que ho sol·licitin.

#### c) Explica els conceptes següents de la programació reactiva que es fan servir a RxJS:
- <ins>Observable</ins>: Representació asíncrona d'una seqüència de dades o esdeveniments que poden arribar. Poden emetre múltiples valors al llarg del temps i ho notifica quan es produeixen.
- <ins>Subscription</ins>: Representa l'execució d'un *observable* i es crea al subscriviu-se a un observale i s'utilitza per cancel·lar la subscripció, alliberant recursos i detenint l'escolta d'esdeveniments.
- <ins>Operators</ins>: Són funcions que empren un *observable* com entrada i retornen un altre *observable* com a sortida. Fet servir per a transformar, filtrar, mesclar o combinar dades emeses per un *observable*.
- <ins>Subject</ins>: Pot emetre valors i al mateix temps actuar com un *observable* escoltant valors emesos per un altre *observable*.
- <ins>Schedulers</ins>: Controlen l'execució de les operacions asíncrones en *RxJS*, permetent especificar quan i en quin context s'han d'executar les operacions, gestionant concurrència i controlant el codi asíncron.

#### d) Quina és la diferència entre promeses i observables?
- <ins>Promeses</ins>: representen una única operació asíncrona que s'ha de resoldre o ha de ser rebutjada amb un valor o un error.
- <ins>Observables</ins>: representen seqüències d'esdeveniments que poden ocórrer al llarg del temps, permetent l'emissió de múltiples valors i notificant canvis continuo.<br><br>
La principal diferència és que les promeses no poden ser cancel·lades directament, mentre que els observables poden ser cancel·lats mitjançant la de-subscripció de l'observador, sent útil per aturar operacions asíncrones quan no siguin necessàries.<br>
Per altra banda, una altra diferència significativa, les promeses solen ser més útils per a situacions d'una única resposta, en canvi, els observables són més flexibles al maneig de fluix de dades continu i esdeveniments complexos.

#### e) Quina és la funció de la tuberia (pipe) async?
- S'utilitza principalment per a treballar amb valors asíncrons. La seva funció principal és facilitar la subscripció o desactivar-la automàticament d'un *observable* directament des d'una plantilla, sense emprar *TypeScript*. Es sol usar per exemple, per mostrar informació d'una trucada d'*API* directament, per exemple.