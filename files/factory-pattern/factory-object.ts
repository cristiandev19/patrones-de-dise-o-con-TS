/**
 * 
 * QUE PROBLEMA VAMOS A VER?
 * 
 * Creacion de cuchillos
 * con Factory object
 * 
 */

// Import stylesheets
import './style.css';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Knife builder</h1>`;

class Knife {
  sharpen() {}
  polish() {}
  package() {}
}

class SteakKnife extends Knife {}
class ChefsKnife extends Knife {}
class BreadKnife extends Knife {}
class ParingKnife extends Knife {}

// Codigo antiguo para craer cuchillos
function orderKnife(knifeType: string) {
  let knife: Knife;

  if (knifeType === 'steak') {
    knife = new SteakKnife();
  } else if (knifeType === 'chefs') {
    knife = new ChefsKnife();
  } else if (knifeType === 'bread') {
    knife = new BreadKnife();
  } else if (knifeType === 'paring') {
    knife = new ParingKnife();
  }

  // Prepare knife
  knife.sharpen();
  knife.polish();
  knife.package();
  return knife;
}

class KnifeFactory {

  public createKnife(knifeType: string) {
    let knife: Knife;
    // Creating knife object
    if (knifeType === 'steak') {
      knife = new SteakKnife();
    } else if (knifeType === 'chefs') {
      knife = new ChefsKnife();
    } else if (knifeType === 'bread') {
      knife = new BreadKnife();
    } else if (knifeType === 'paring') {
      knife = new ParingKnife();
    } 
    return knife;
  }
}

class KnifeStore {

  constructor(
    private factory: KnifeFactory
  ) {}

  public orderKnife(knifeType: string): Knife {
    let knife: Knife;
    // use the create method in the factory
    knife = this.factory.createKnife(knifeType);
    // Prepare the knife
    knife.sharpen();
    knife.polish();
    knife.package();    
    return knife; 
  }
}

/**
 * 
 * Ahora tenemos dos clases generales
 * 1. Para una fabrica para crear cuchillos 
 * 2. Para usar una fabrica cualquiera y que tenga los metodos adecuados
 * 
 */

