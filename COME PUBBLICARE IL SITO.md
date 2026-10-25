# Sito di Interrogami — come pubblicarlo

## Cosa c'è in questa cartella
- `index.html` → la pagina di presentazione (con «Apri l'app» e «Scarica i file»)
- `app/` → la web app vera e propria (installabile sul telefono)
- `interrogami.zip` → lo zip che gli utenti scaricano (app + guide)
- questa guida

Vanno caricati **così come sono**, mantenendo la cartella `app/`.

## Pubblicazione su GitHub Pages (gratis)
1. Account gratuito su https://github.com (basta un'email).
2. **+** → **New repository** → nome `interrogami`, **Public** → **Create repository**.
3. **Add file → Upload files**: trascina `index.html`, `interrogami.zip`, la guida e la cartella `app` (trascinando la cartella intera i file finiscono al posto giusto). **Commit changes**.
4. **Settings → Pages** → Source: **Deploy from a branch** → Branch **main**, **/ (root)** → **Save**.
5. Dopo un minuto il sito è su `https://TUONOME.github.io/interrogami/`
   - pagina di presentazione: quell'indirizzo
   - app: `https://TUONOME.github.io/interrogami/app/`
   - download: `https://TUONOME.github.io/interrogami/interrogami.zip`

Per aggiornare in futuro: carica di nuovo i file cambiati nello stesso modo.

## Contare visite e download
GitHub Pages non conta le visite (in *Insights → Traffic* del repository vedi solo le visite al codice, non alla pagina). Per contarle davvero la pagina è già predisposta per **GoatCounter**, gratuito per uso personale, senza cookie e senza banner:
1. Crea l'account su https://www.goatcounter.com/signup scegliendo un codice (es. `interrogami`).
2. Apri `index.html` con il Blocco note, trova la riga `var GOATCOUNTER_CODE = "";` e scrivi il codice tra le virgolette: `var GOATCOUNTER_CODE = "interrogami";`
3. Ricarica `index.html` su GitHub.
Da quel momento su `https://interrogami.goatcounter.com` vedi le visite alla pagina e, come eventi separati, quante volte è stato premuto «Apri l'app» (`apri-app`) e «Scarica» (`download-zip`).

## Ricevere le segnalazioni («Segnala un bug», «Contattaci», «Hai altre domande?»)
In fondo alla pagina ci sono tre scritte che aprono un modulo. Il sito non ha un server, quindi scegli uno dei due modi (in `index.html`, vicino alla fine, trovi le due righe da compilare):
- **Formspree (consigliato)**: account gratuito su https://formspree.io → *New form* → copia l'ID del modulo (tipo `xabcdwxy`) e scrivilo in `var FORMSPREE_ID = "xabcdwxy";`. I messaggi ti arrivano via email (gratis fino a 50 al mese) e chi scrive non deve aprire la posta.
- **Solo email**: lascia vuoto FORMSPREE_ID e scrivi il tuo indirizzo in `var CONTACT_EMAIL = "tuo@indirizzo.it";`. Il modulo apre il programma di posta di chi scrive con il messaggio già pronto.
Puoi compilare entrambe: se Formspree non risponde, il messaggio di errore suggerisce l'email.
