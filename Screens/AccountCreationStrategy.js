// This is an abstract class to define the account creation strategy
export class AccountCreationStrategy {
    createAccount(username, email, password) {
      throw new Error('This method should be overwritten');
    }
  }
  
  // This strategy uses email for account creation
  export class EmailAccountCreation extends AccountCreationStrategy {
    createAccount(username, email, password) {
      console.log(`Account created using email: Username: ${username}, Email: ${email}, Password: ${password}`);
      // Here, add actual logic for creating an account via email
    }
  }
  