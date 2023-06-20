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
    const [cartOpen, setCartOpen] = React.useState(false)

  return (
    <div className="wrapper">
        { cartOpen ? <Overlay doCartClose={()=> setCartOpen(false)}/> : null}
        <Header  doCartOpen={()=> setCartOpen(true)} ></Header>
    <section>
        <div className='search-block'>
            <h1>Всі кросівки</h1>
            <div className='search-input'>
                <img src="./images/body/search.svg" alt="search" />
                <input type="text" placeholder='Пошук' />
            </div>
        </div>
        
        <div className='sneakers-flex'>
            {arr.map( val => 
                <SneakersContain 
                    name={val.name} 
                    price={val.price} 
                    imgURL={val.imgURL} 
                    onClickFavorite={ ()=> console.log('натиснули на закладки')}
                    onClickPlus={ ()=> console.log('натиснули на плюс')} />)}
        </div>
        
    </section>
    </div>
  );
}

export default App;
