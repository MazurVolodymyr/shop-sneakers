const Overlay = (props) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Кошик
                <img src="./images/icons/btn-remove.svg" alt="remove" className='btn-remove-h2' onClick={props.doCartClose}/>
                </h2>

                <div className="items">
                    <div className="cartItem">
                        <img src="./images/body/2.svg" alt="" className='cartItem__sneakers'/>
                        <div>
                            <p>Чоловічі кросівки Nike Air Max 270</p>
                            <b>7999 грн</b>
                        </div>
                        <img src="./images/icons/btn-remove.svg" alt="remove" className='btn-remove' />
                    </div>
                    <div className="cartItem">
                        <img src="./images/body/2.svg" alt="" className='cartItem__sneakers'/>
                        <div>
                            <p>Чоловічі кросівки Nike Air Max 270</p>
                            <b>7999 грн</b>
                        </div>
                        <img src="./images/icons/btn-remove.svg" alt="remove" className='btn-remove' />
                    </div>
                </div>
                <div className='cartTotalBlock'>
                    <ul >
                        <li >
                            <span>Разом</span>
                            <div></div>
                            <b> 15020</b>  
                        </li>
                    </ul>
                    <button className='greenButton'>Замовити <img src="./images/icons/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>  
    )
}

export default Overlay