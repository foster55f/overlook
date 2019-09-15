class Customer {
  constructor(userData) {
    this.id = userData.id || Customer.all.length + 1;
    this.name = userData.name;
  }
  
  static loadFromData() {
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
      .then(data => data.json())
      .then(data => data.users.forEach(user => Customer.all.push(new Customer(user))))
      .catch(err => console.log(err));
  }

  static findAllByName(name) {
    var foundName = Customer.all.filter(person => {
      return person.name.toLowerCase().startsWith(name.toLowerCase());
    })
    return foundName
  }
}

Customer.all = []


export default Customer;