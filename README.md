# WIP: Survey-widget

Hola! Aquest és un projecte de Vue 3 en WIP  d'un web widget per fer petites enquestes en qualsevol lloc web, independentment de la infraestructura tecnològica que facis servir (Un CMS com Wordpress, qualsevol framework com React o Vue, etc)


## Setup

Per a fer servir aquest widget, en el head del teu html, cal referenciar el script:


	<script  type="module"  src="https://survey-widget.vercel.app/survey-widget.js"></script>


A partir d'aquí, només cal fer servir aquest widget en qualsevol part del body del teu html, amb un paràmetre per recollir les dades en la nostra API, d'aquesta manera:

	<survey-widget client_id="(El teu clientID)"></survey-widget>


## Customització

El widget està compost de tres pantalles de càrrega. Per a totes aquestes, hi ha certs paràmetres de customització:
| Paramàtre | Descripció | Pantalla de càrrega
|--|--|--|
|  client_id| Un ID que permet recollir les dades en el nostre API | -
|  logo_src| Link a la imatge que vols fer servir per a logo| -
|  consent_title| Missatge de consentiment a la primera pantalla de càrrega | Consentiment
|  consent_confirm| Text en el botó de confirmació | Consentiment
|  consent_decline| Text en el botó de declinació |Consentiment
|  consent_disclaimer| Missatge extra pel consentiment |Consentiment
|  survey_title| Pregunta per a la enquesta |Enquesta
|  survey_type| Tipus de pregunta|Enquesta 
|  thanks_title| Missatge d'agraïment |Agraïment


## Visualitzar dades recollides

WIP
