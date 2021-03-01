
/**
 * The factory method
 * Use the same class to create objects and use diffent methods
 * 
 */
class Knife {
  sharpen() {}
  polish() {}
  package() {}
}

// Lo dejamos como una clase abstracta porque queremos que las subclases instancien los metodos ellas mismas 
abstract class KnifeStore {

  public orderKnife(knifeType: string): Knife {
    let knife: Knife;
    // use the create method in the factory
    knife = this.createKnife(knifeType);
    // Prepare the knife
    knife.sharpen();
    knife.polish();
    knife.package();    
    return knife; 
  }

  abstract createKnife(knifeType: string): Knife
}


class BudgetKnifeStore extends KnifeStore {

  createKnife(knifeType: string) {
    if (knifeType === 'steak') {
      return new BudgetSteakKnife();
    } else if (knifeType === 'chefs') {
      return new BudgetChefsKnife();
    } else {
      return null;
    }
  }

}

