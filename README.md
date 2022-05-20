# WIP: Survey-widget

Hola! Aquest és un projecte de Vue 3 en WIP  d'un web widget per fer petites enquestes en qualsevol lloc web, independentment de la infraestructura tecnològica que facis servir (Un CMS com Wordpress, qualsevol framework com React o Vue, etc).

## Setup

Per a fer servir aquest widget, en el head del teu html, cal referenciar el script:


	<script  type="module"  src="https://survey-widget.vercel.app/survey-widget.js"></script>


A partir d'aquí, només cal fer servir aquest widget en qualsevol part del body del teu html, amb un paràmetre **obligatori** per recollir les dades en la nostra API, d'aquesta manera:

	<survey-widget client_id="(El teu clientID)"></survey-widget>


## Personalització

El widget té uns paràmetres per defecte que resultaran en un widget com el següent: [survey-widget.vercel.app](https://survey-widget.vercel.app/ "https://survey-widget.vercel.app")

Si és  volgués canviar els paràmetres, només cal afegir atributs a l'element.

### Paràmetres generals

El widget està compost de tres pantalles de càrrega. Per a totes aquestes, hi ha certs paràmetres de personalització: 

| Paràmetre | Descripció | Pantalla de càrrega
|--|--|--|
| `client_id` | Un ID que permet recollir les dades en el nostre API | -
| `survey_type` | El tipus d'enquesta que es farà (vegeu següent apartat) | -
| `logo_src` | Enllaç a la imatge que vols fer servir per a logo| -
| `consent_title` | Missatge de consentiment a la primera pantalla de càrrega | Consentiment
| `consent_confirm` | Text en el botó de confirmació | Consentiment
| `consent_decline`| Text en el botó de declinació |Consentiment
| `consent_disclaimer` | Missatge extra pel consentiment |Consentiment
| `survey_title` | Pregunta per a l'enquesta |Enquesta
| `survey_type` | Tipus de pregunta|Enquesta 
| `thanks_title` | Missatge d'agraïment |Agraïment

### Paràmetres per tipus d'enquesta (`survey_type`)

Actualment, el widget accepta diferents tipus d'enquesta. La predeterminada ès `text`. Per a cada tipus, hi pot haver certs paràmetres de configuració:

| Tipus | Paràmetre associat | Descripció
|--|--|--|
|  `text` | `survey_confirm` | Text en el botó de confirmació
|  `text` | `survey_placeholder` | Text en gris de l'àrea de text
|  `linear_scale` | `survey_left` | Text en l'esquerra del spectrum
|  `linear_scale` | `survey_right` | Text en la dreta del spectrum


## Visualitzar dades recollides

WIP


## Setup inicial per a desenvolupament


	cp default_index.html index.html 

> El index.html no està inclòs a git. Això es fa per tal que es puguin fer canvis a la configuració del widget sense fer un tracking a git d'aquest arxiu.

	npm ci
	npm run dev
	
>Iniciació estàndar d'una aplicació de vue a localhost:3000
