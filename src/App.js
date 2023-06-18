import './index.scss';

import SneakersContain from './components/Sneakers-contain';
import Header from './components/Header';
import Overlay from './components/Overlay';
const App = () => {
  return (
    <div className="wrapper">
        <Overlay></Overlay>
        <Header></Header>
    <section>
        <div className='search-block'>
            <h1>Всі кросівки</h1>
            <div className='search-input'>
                <img src="./images/body/search.svg" alt="search" />
                <input type="text" placeholder='Пошук' />
            </div>
        </div>
        
        <div className='sneakers-flex'>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
            <SneakersContain></SneakersContain>
        </div>
        
    </section>
    </div>
  );
}

export default App;
