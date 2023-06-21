import './index.scss';
import React from 'react';
import SneakersContain from './components/Sneakers-contain';
import Header from './components/Header';
import Overlay from './components/Overlay';

const arr = [
    { name:'Чоловічі кросівки Nike Blazer Mid Suede', price: '9999', imgURL: './images/body/1.svg'},
    
    { name:'Чоловічі кросівки Nike Air Max 270', price: '7999', imgURL: './images/body/2.svg' },
    { name:'Чоловічі кросівки Nike Blazer Mid Suede', price: '4699', imgURL: './images/body/3.svg' },
    { name:'Кросівки Puma X Aka Boku Future Rider', price: '11000' , imgURL: './images/body/4.svg'},
]

const App = () => {
    const [cartOpen, setCartOpenClose] = React.useState(false)

    const [cartItems, setCartItems] = React.useState([])

    const onAddToCart = (obj) =>{
        setCartItems(prev => [...prev, obj]) //на початку ми маємо пустий масив, далі при кліку в наш масив попадає об'єкт, при наступному кліку ми беремо всі старі дані та додаємо в кінець масива ще один об'єкт
    } 
  return (
    <div className="wrapper">
        { cartOpen ? <Overlay doCartClose={()=> setCartOpenClose(false)} items={cartItems} /> : null}
        <Header  doCartOpen={()=> setCartOpenClose(true)} ></Header>
    <section>
        <div className='search-block'>
            <h1>Всі кросівки</h1>
            <div className='search-input'>
                <img src="./images/body/search.svg" alt="search" />
                <input type="text" placeholder='Пошук' />
            </div>
        </div>
        
        <div className='sneakers-flex'>
            {arr.map( item => 
                <SneakersContain 
                    name={item.name} 
                    price={item.price} 
                    imgURL={item.imgURL} 
                    onFavorite={ ()=> console.log('натиснули на закладки')}
                    onPlus={ (obj)=> onAddToCart(obj)} />)}
        </div>
        
    </section>
    </div>
  );
}

export default App;
