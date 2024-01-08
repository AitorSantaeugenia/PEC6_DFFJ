# PAC6 - Desenvolupament front-end amb frameworks Javascript

## Dades del alumne

- asantaeugenia@uoc.edu
- Aitor Javier Santaeugenia Marí
- En aquesta PAC hem realitzat diversos exercicis;
    - Els <ins>**exercicis** **1** i **3**</ins> són preguntes teòriques.
        - Preguntes exercici 1: https://github.com/AitorSantaeugenia/PEC6_DFFJ/blob/main/PEC6_Ej_Teor/PEC6_Ej1_respuestas_teoria.md
        - Preguntes exercici 3: https://github.com/AitorSantaeugenia/PEC6_DFFJ/blob/main/PEC6_Ej_Teor/PEC6_Ej3_respuestas_teoria.md
    - L'<ins>**exercici 2**</ins> s'ha de crear un servei i conté un parell de preguntes teòriques.
        - Preguntes exercici 2: https://github.com/AitorSantaeugenia/PEC6_DFFJ/blob/main/PEC6_Ej_Teor/PEC6_Ej2_respuestas_teoria.md
    - A l'<ins>**exercici 4**</ins> cal emprar un servidor. En aquest hi ha que obtenir els articles des de <ins>/api/articles</ins>, fer un *patch* per augmentar o disminuir la quantitat de l'article al carret i crear un nou article emprant el servidor.
    <br> Al mateix temps, cal crear un filtratge per nom.
    - <ins>**L'exercici 5**</ins> hi ha que utilitzar *pipes* per mostrar el simbol € i dos decimals i un altre *pipe* que emprarem al app.module.ts (globalment) per a mostrar una imatge per defecte quan no hi hagi *string* de la imatge.

```html
<!-- Pipe exercici 5 -->
{{article.price | currency:'EUR':'symbol':'1.2-2' }}
```

<div align="center">
<div  style="width:300px">

 ![all_test_done](https://private-user-images.githubusercontent.com/14861253/294830904-02664cc9-4522-4e14-87d0-b2c26a6e945e.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2OTgwNDYsIm5iZiI6MTcwNDY5Nzc0NiwicGF0aCI6Ii8xNDg2MTI1My8yOTQ4MzA5MDQtMDI2NjRjYzktNDUyMi00ZTE0LTg3ZDAtYjJjMjZhNmU5NDVlLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA4VDA3MDkwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEzMTVlMTk1YTA5MzVlMjI3MDExNjI0YzU1MTI0MzlmMWUwZGUwYWEwODY2YTQ0Yzk2ODFkNzgzZWRiZGFkZDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Qg17uex6_h2j4PjdYEkxWoCSdmBFjL7f8MdiMBJDR4E)
 
 <span style="font-size:10px; color:grey">El ChangeDetection no funciona, hi ha de fer *refresh()* a la pàgina per veure els canvis.</span>

</div>
        

<div>

 ![all_test_done](https://private-user-images.githubusercontent.com/14861253/294837652-62d53f37-0048-4de1-9b5a-3eb41e260f6a.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ3MDAzOTksIm5iZiI6MTcwNDcwMDA5OSwicGF0aCI6Ii8xNDg2MTI1My8yOTQ4Mzc2NTItNjJkNTNmMzctMDA0OC00ZGUxLTliNWEtM2ViNDFlMjYwZjZhLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA4VDA3NDgxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdjNTg1OGMwOTZkMTEyNjgzZGIxMDQyOGM2YTI3NjdlNmMxNDlmYWY2YjAzZjliZGEyODRhZTQzYjdlMzQzZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.bLuAJuommwLI9zGOOmXCZI-r2iizd5lxDDLLM4PEcTY)

 <span style="font-size:10px; color:grey">Creant un article *headphones*.</span>

</div>

<div>

![Imatge defecte per Pipe](https://private-user-images.githubusercontent.com/14861253/294842732-bcfaf3ab-5fcc-4e2f-a8e5-563cfa2e26bd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ3MDIxMDYsIm5iZiI6MTcwNDcwMTgwNiwicGF0aCI6Ii8xNDg2MTI1My8yOTQ4NDI3MzItYmNmYWYzYWItNWZjYy00ZTJmLWE4ZTUtNTYzY2ZhMmUyNmJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA4VDA4MTY0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE3MGU2MjlkYjBmNDA4MmIxNmI4NmU5ZTEwNzJkYWQ0MmQ1YjQyOTQ1NGFjNTRkZTg2ZDc5Yjg3MDFlZTIxNmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ExXsRPvn-O7Mws4HMdbuyIGd4-A1GkJwSe-ZbfC-fXI)

 <span style="font-size:10px; color:grey">*Pipe* per a imatges sense *string* (*URL*), cal dir que al crear nossaltres un article a la *web*, la *URL* es obligatoria (així que hi ha que canviar el *.js* del servidor).</span>

</div>

</div>

-------------

Podem anar al repositori en el següent [enllaç](https://github.com/AitorSantaeugenia/PEC6_DFFJ).

