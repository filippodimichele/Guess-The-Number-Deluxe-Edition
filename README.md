# Guess The Number: Deluxe edition

Applicazione web interattiva focalizzata sulla predizione numerica. Il sistema genera un valore segreto e l'utente deve identificare la soluzione corretta tra i numeri proposti per completare il gioco con successo.

## Prerequisiti

L'esecuzione e la gestione dell'ambiente di sviluppo richiedono l'installazione del runtime Node.js..

## Requisiti Tecnici Obbligatori

Il progetto rispetta i seguenti vincoli di sviluppo:

* JavaScript Puro: Implementazione basata su Vanilla JS.
* Generazione Numeri: Utilizzo nativo dell'oggetto Math per l'elaborazione del numero segreto all'avvio dello script.
* Interazione con il DOM: Manipolazione dinamica dell'interfaccia utente.

## Installazione

Per configurare l'applicazione in ambiente locale, eseguire la seguente sequenza di comandi nel terminale:

1. Clonazione del repository remoto:
   git clone https://github.com

2. Accesso alla directory principale del progetto:
   cd guess-the-number-deluxe

3. Installazione dei pacchetti e delle dipendenze necessarie:
   npm install

## Esecuzione progetto

Per avviare il server locale con supporto al ricaricamento automatico:

npm run dev

Il link per accedere all'interfaccia di gioco verra visualizzato all'interno del terminale.

## Compilazione e Produzione
Per generare i file statici ottimizzati e pronti per la distribuzione su server web:

npm run build
