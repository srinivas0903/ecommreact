import React from 'react';
import './Cart.css';

export default function App() {
  // Array of items
  const items = [
    {
      name: 'Mango',
      image: 'https://th.bing.com/th/id/R.ab6c56605d3aa4bab914b20c75fdb213?rik=tDMv9WRYvt2OeA&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fmango%2fmango-09.jpg&ehk=dv%2b5PHEII27LKRaPpFh5E2wEmhnx4NNH3UpGsS6wZ70%3d&risl=&pid=ImgRaw&r=0',
      price: 300
    },
    {
      name: 'Apple',
      image: 'https://th.bing.com/th/id/OIP.-4RJk-TNzc0Ulbu6-Ogx_AHaFR?rs=1&pid=ImgDetMain',
      price: 300
    },
    {
      name: 'Orange',
      image: 'https://th.bing.com/th/id/OIP.oVeiT4LzCXtk9JVBfN-gMQHaE7?rs=1&pid=ImgDetMain',
      price: 300
    },
    // {
    //   name: 'Guava',
    //   image: 'https://th.bing.com/th/id/OIP.gHHwNXzq_P6NpIo06jjaGAHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    //   price: 300
    // },
    // {
    //   name: 'Mango',
    //   image: 'https://th.bing.com/th/id/OIP.KNHJ3Zj5fMpWo1Hhs97uDwHaF7?rs=1&pid=ImgDetMain',
    //   price: 300
    // },
    // {
    //   name: 'Banana',
    //   image: 'https://loe.org/content/2014-04-18/10-bananabunch.gif',
    //   price: 300
    // }
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