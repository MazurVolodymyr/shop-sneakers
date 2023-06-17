import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faCartShopping, faHeart, faCircleUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="wrapper">
      <header className='header'>
        <div className='header__contain'>
          <div className='header__left'>
            <div>
              <img src="../images/header/logo.svg" alt="" />
            </div>
            <div className='header__left-title'>
              <h3>SNEAKERS</h3>
              <p>Магазин найкращого взуття</p>
            </div>
          </div>
          <div className='header__right'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>2400 грн</p>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </div>
      </header>
      <section>
        <div className='search-block'>
            <h1>Всі кросівки</h1>
            <div className='search-input'>
                <img src="./images/body/search.svg" alt="search" />
                <input type="text" placeholder='Пошук' />
            </div>
        </div>
        
        <div className='sneakers-flex'>
            <div className='sneakers-contain'>
                <div className='sneakers-body'>
                    <div className='heart'>
                    <img src="./images/header/heart/svg" alt="" />
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className='img'>
                        <img src="./images/body/1.svg" alt="" />
                    </div>
                    
                    <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                    <div className='bottom-descr'>
                        <div>
                            <p>ціна :</p>
                            <p>7999 грн</p>
                        </div>
                        <div>
                            <button className='button'>
                                <img src="./images/body/plus.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sneakers-contain'>
                <div className='sneakers-body'>
                    <div className='heart'>
                    <img src="./images/header/heart/svg" alt="" />
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className='img'>
                        <img src="./images/body/2.svg" alt="" />
                    </div>
                    
                    <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                    <div className='bottom-descr'>
                        <div>
                            <p>ціна :</p>
                            <p>7999 грн</p>
                        </div>
                        <div>
                            <button className='button'>
                                <img src="./images/body/plus.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sneakers-contain'>
                <div className='sneakers-body'>
                    <div className='heart'>
                    <img src="./images/header/heart/svg" alt="" />
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className='img'>
                        <img src="./images/body/3.svg" alt="" />
                    </div>
                    
                    <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                    <div className='bottom-descr'>
                        <div>
                            <p>ціна :</p>
                            <p>7999 грн</p>
                        </div>
                        <div>
                            <button className='button'>
                                <img src="./images/body/plus.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sneakers-contain'>
                <div className='sneakers-body'>
                    <div className='heart'>
                    <img src="./images/header/heart/svg" alt="" />
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className='img'>
                        <img src="./images/body/4.svg" alt="" />
                    </div>
                    
                    <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                    <div className='bottom-descr'>
                        <div>
                            <p>ціна :</p>
                            <p>7999 грн</p>
                        </div>
                        <div>
                            <button className='button'>
                                <img src="./images/body/plus.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </section>
    </div>
  );
}

export default App;
