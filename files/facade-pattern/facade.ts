interface IAccount {
  deposit(amount: number);
  withdraw(amount: number);
  transfer(amount: number);
  getAccountNumber();
}

class Chequing implements IAccount {}
class Saving implements IAccount {}
class Investment implements IAccount {}

class BankService {
  bankAccounts: IAccount;

  constructor() {
  }

  createNewAccount(type: string, initAmount: number) {
    let newAccount: IAccount; 
    switch(type) {
      case 'chequing':
        newAccount = new Chequing(initAmount);
        break;
      case 'saving':
        newAccount = new Saving(initAmount);
        break;
      case 'investing':
        newAccount = new Investment(initAmount);
        break;
      default:
        console.log('Invalid type');
        break;
    }
    if (!newAccount) {
      this.bankAccounts[newAccount.getAccountNumber()] = newAccount;
      return newAccount.getAccountNumber();
    }
    return -1;
  }

  transferMoney(to: number, fromAcc: number, amount: number) {
    let toAccount = this.bankAccounts[to];
    let fromAccount = this.bankAccounts[fromAcc];
    fromAccount.transfer(toAccount, amount);
  }
}

class Customer {
  constructor() {
    let myBankService: BankService = new BankService();
    let mySaving: number = myBankService.createNewAccount('saving', 500);
    let myInvestment: number = myBankService.createNewAccount('investment', 1000);

    myBankService.transferMoney(mySaving, myInvestment, 300);
  }  
}

