import { useContext } from "react";
import MyContext from "../context/MyContext";

import { Product } from '../context/MyContext';


const Content = () => {
  const {step}=useContext(MyContext);

  const products : Product [] = [
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ];
 
  const filteredProducts = products.filter(product => product.step === step);


 return (
    <div className='card'>
      <p>Step: {step}</p>
    
      <ul>
          
      {filteredProducts.map(product => (
          <li>
            key={product.id}
            {product.name} - ${product.price}
    
          </li>
             ))}
        </ul>
     
       
    </div>
  )
}

export default Content