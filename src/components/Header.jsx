const Header = (props) => {

    return(
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
                <div className='header__right' >
                    <img src="./images/icons/basket.svg" alt="basket" onClick={props.doCartOpen}/>
                    <p>2400 грн</p>
                    <img src="./images/icons/heart.svg" alt="like" />
                    <img src="./images/icons/Union.svg" alt="Your account" />
                </div>
            </div>
        </header>
    )
}

export default Header