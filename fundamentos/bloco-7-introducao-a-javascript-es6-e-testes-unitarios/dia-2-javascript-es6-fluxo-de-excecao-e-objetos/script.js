const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  }
};
const payment = {
  total: (Object.values(order.order.pizza.marguerita)[0] * Object.values(order.order.pizza.marguerita)[1]) + (Object.values(order.order.pizza.pepperoni)[0] * Object.values(order.order.pizza.pepperoni)[1]) + (Object.values(order.order.drinks.coke)[1] * Object.values(order.order.drinks.coke)[2]) + Object.values(order.order.delivery)[1] 
}

// const customerInfo = order => `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`;
  // Adicione abaixo as informações necessárias.

// console.log('result:', customerInfo(order));

const orderModifier = order => `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é ${payment.total}` ;

console.log('result2:', orderModifier(order));
order.name = 'Luiz Silva';
payment.total = 50;
console.log('result2:', orderModifier(order));