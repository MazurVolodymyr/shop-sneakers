import './index.scss';
import axios from 'axios';
import React, { useEffect } from 'react';
import SneakersContain from './components/Sneakers-contain';
import Header from './components/Header';
import Overlay from './components/Overlay';


const App = () => {
    
    const [items, setItems] = React.useState([])
    const [cartOpen, setCartOpenClose] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])



    React.useEffect(()=>{
    axios.get('https://6491aaa02f2c7ee6c2c8abe1.mockapi.io/items').then(response=>{
        setItems(response.data)
        })
    axios.get('https://6491aaa02f2c7ee6c2c8abe1.mockapi.io/cartItems').then(response=>{
        setCartItems(response.data)
    })
    }, [])

    const onAddToCart = (obj) =>{
        axios.post('https://6491aaa02f2c7ee6c2c8abe1.mockapi.io/cartItems', obj) //цей пост запит слугує для того щоб після перезапуску сайту наша корзина не ставала пустою
        setCartItems(prev => [...prev, obj]) //на початку ми маємо пустий масив, далі при кліку в наш масив попадає об'єкт, при наступному кліку ми беремо всі старі дані та додаємо в кінець масива ще один об'єкт
    } 
    const onRemoveFromCart = (id) =>{
        axios.delete(`https://6491aaa02f2c7ee6c2c8abe1.mockapi.io/cartItems/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const [searchValue, setSearchValue] = React.useState('')
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
  return (
    <div className="wrapper">
        { cartOpen ? <Overlay doCartClose={()=> setCartOpenClose(false)} items={cartItems} onRemove={onRemoveFromCart} /> : null}
        <Header  doCartOpen={()=> setCartOpenClose(true)} ></Header>
    <section>
        <div className='search-block'>
            <h1>{searchValue ? `Пошук за запитом "${searchValue}"` : 'Всі кросівки'}</h1>
            <div className='search-input'>
                <img src="./images/body/search.svg" alt="search" />
                <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder='Пошук' />
            </div>
        </div>
        
        <div className='sneakers-flex'>
            {items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase())).map( (item, index) => 
                <SneakersContain 
                    key={index}
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
