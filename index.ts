/**
 * 
 * QUE PROBLEMA VAMOS A VER?
 * 
 * Vamos a simular una parte de una aplicacion 
 * de un juego de Poker
 * 
 */

// Import stylesheets
import './style.css';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Demo Poker singleton</h1>`;

// Creamos la clase que sera un singleton
class Card {
  public numero: number;
  public tipo: string;
  public color: string;
  // Atributo que guardara la referencia al objeto
  private static uniqueInstance: Card = null;

  private constructor() {
    // No hace nada mas que instanciar realmente
    this.numero = 1;
    this.tipo = 'trebol';
    this.color = 'negro';
  }

  public static getInstance(): Card {
    if(this.uniqueInstance == null) {
      this.uniqueInstance = new Card();
    }
    return this.uniqueInstance;
  }

}

const carta = Card.getInstance();
console.log('carta', carta)

// Una vez instanciada vamos a mostrar su contenido
const el = document.createElement('div');
// Veamos...
let p = document.createElement('p');
p.innerHTML = carta.color;
el.appendChild(p);
//
p = document.createElement('p');
p.innerHTML = `${carta.numero}`;
el.appendChild(p);
// 
p = document.createElement('p');
p.innerHTML = carta.tipo;
el.appendChild(p);
// Y al final todo
appDiv.appendChild(el);

