// BankAccount class
// - Properties
//   - balance (defaults to 0 if not provided)
//   - accountHolder
//   - accountNumber
// - Methods
//   - deposit(amt) - increases balance by amt
//   - withdraw(amt) - decreases balance by amt if balance is sufficient

// const userAccount = new BankAccount("123abc", "John Doe");

class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amt) {
    if(amt > 0) {
      this.balance += amt;
      console.log(`You deposited $${amt}. New balance is $${this.balance}`);
      
    } else {
    console.log(`Can't deposit a negative amount`); 
    }
  }

  withdraw(amt) {
    if (amt > this.balance) {
      console.log(`You can't withdraw that much!`);
    } else {
      this.balance -= amt;
      console.log(`You withdrew $${amt}. New balance is: $${this.balance}`);
    }
  }
}

const a = new BankAccount("User", "123456");
a.deposit(1000); // Output: You deposited $1000. New balance is $
a.withdraw(500); // Output: You withdrew $500. New balance is: $500