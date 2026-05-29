export function renderLayout() {
  document.getElementById("app").innerHTML = `

    <div class="card">

      <h1 class="titolo">Guess The Number <br> <span class="titolo-deluxe">Deluxe Edition</span></h1>
      <p class="sottotitolo">Scegli un numero tra 1 e 100</p>

      <input
        type="number"
        id="inputNumero"
        placeholder="Inserisci qui il tuo numero"
        class="input"
        max="100"
        min="1"
      />

      <button id="btnIndovina" class="btn-indovina">
       Indovina il numero segreto...
      </button>

      
      <p id="messaggio" class="messaggio"></p>
      
      <p id="contatore" class="contatore">Tentativi:  0/10</p>
      <button id="btnRigioca" style="display:none" class="btn-rigioca">
      Riprova!</p>
      </button>
    
     <p class="firma">
  <svg class="icona-firma" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
  made by Filippo Di Michele
</p>
    </div>
  `;
}