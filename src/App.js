import React from 'react';
import './Cart.css';

export default function App() {
  // Array of items
  const items = [
    {
      name: 'Black Coffee',
      image: '/public/images/cofee.jpg',
      price: 2.5
    },
    {
      name: 'Cappuccino',
      image: '/images/cofee.jpg',
      price: 3
    },
    {
      name: 'Hot choclate coffee',
      image: '/ecommreact/images/cofee.jpg',
      price: 2.6
    },
    {
      name: 'Guava',
      image: 'https://th.bing.com/th/id/OIP.gHHwNXzq_P6NpIo06jjaGAHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: 3.5
    },
    {
      name: 'Mango',
      image: 'https://th.bing.com/th/id/OIP.KNHJ3Zj5fMpWo1Hhs97uDwHaF7?rs=1&pid=ImgDetMain',
      price: 2.6
    },
    {
      name: 'Banana',
      image: 'https://loe.org/content/2014-04-18/10-bananabunch.gif',
      price: 2.2
    }
  ];

  return (
    <div>
      <div className='container'>
        {items.map((item, index) => (
          <div className='con' key={index}>
            <img src={item.image} alt={item.name} />
            <br />
            <h3>{item.name}</h3>
            <h3>price : {item.price}</h3>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}