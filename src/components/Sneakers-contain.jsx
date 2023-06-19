
const SneakersContain = (props) =>{
    
    return(
        <div className='sneakers-contain'>
            <div className='sneakers-body'>
                <div className='heart' >
                    <img src="./images/icons/heart.svg" alt="like" onClick={props.onClickFavorite} />
                </div>
                <div className='img'>
                    <img src={props.imgURL} alt="" /> 
                </div>
                
                <p>{props.name}</p>
                <div className='bottom-descr'>
                    <div>
                        <p>ціна :</p>
                        <p>{props.price} грн</p>
                    </div>
                    <div>
                        <button className='button' onClick={props.onClickPlus}>
                            <img src="./images/icons/btn.svg" alt="add to order" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SneakersContain