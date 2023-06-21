const Overlay = ( {doCartClose, items = [] }) => { //робимо в {} деструктирізацію
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Кошик
                <img src="./images/icons/btn-remove.svg" alt="remove" className='btn-remove-h2' onClick={doCartClose}/>
                </h2>

                <div className="items">
                {items.map(obj => <div className="cartItem">
                        <img src={obj.imgURL} alt="" className='cartItem__sneakers'/>
                        <div>
                            <p>{obj.name}</p>
                            <b>{obj.price}</b>
                        </div>
                        <img src="./images/icons/btn-remove.svg" alt="remove" className='btn-remove' />
                    </div>)}

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