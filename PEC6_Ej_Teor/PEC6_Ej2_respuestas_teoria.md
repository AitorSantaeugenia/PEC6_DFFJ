### Exercici 2 – Pràctica – Serveis

#### a. Quina és la diferència entre definir un servei usant el decorador @Injectable o @NgModule? Referència: https://angular.io/guide/providers
- @Injectable: S'utilitza per marcar una classe com un servei injectable, així proporcionant instàncies de serveis a altres components o directives.
- @NgModule: S'usa per definir els mòduls d'angular, aquests agrupen components, directives, pipes i/o serveis relacionats i fa que estiguin disponibles en altres parts de l'aplicació.

#### b. Quines altres opcions admeten el decorador @Injectable per a la propietat ProvidedIn? Per què serveixen les altres configuracions? Referència: https://dev.to/christiankohler/improved-dependeny-injectionwith-the-new-providedin-scopes-any-and-platform-30bb

- Com l'enllaç no funciona, hem pres com a referència: https://dev.to/gaurangdhorda/understand-providedin-options-in-angular-services-2kal
- També de https://jnpiyush.medium.com/angular-deep-dive-into-providedin-scopes-be768194b541

- El paràmetre ProvidedIn especifica el mòdul on s'ha de proporcionar el servei. A part de root, existeixen altres configuracions:
    - root: El servei es proporciona a nivell de l'aplicació, sent un servei singleton compartit en tota l'aplicació.
    - any: El servei es proporciona en qualsevol mòdul que el sol·liciti, obtenint una instància d'aquest.
    - platform: Crea una instància només un cop i comparteix l'estat en cada llibreria i cada nivell de l'arbre de components.
    - < featuredModule >: Si escrivim el nom del mòdul, també podríem garantir que el servei només pogués ser emprat en el mòdul que s'ha importat.

