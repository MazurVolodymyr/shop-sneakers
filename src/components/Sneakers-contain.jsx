import React from 'react';

const SneakersContain = ({onFavorite, onPlus, name,price,imgURL}) =>{
    const [isAdded, setIsAdded] = React.useState(true)

    const onClickPlus = () =>{
        onPlus({name,price,imgURL})
        setIsAdded(!isAdded)
    }

    return(
        <div className='sneakers-contain'>
            <div className='sneakers-body'>
                <div className='heart' >
                    <img src="./images/icons/heart.svg" alt="like"/>
                </div>
                <div className='img'>
                    <img src={imgURL} alt="" /> 
                </div>
                
                <p>{name}</p>
                <div className='bottom-descr'>
                    <div>
                        <p>ціна :</p>
                        <p>{price} грн</p>
                    </div>
                    <div>
                        <img onClick={onClickPlus} src={ isAdded ? "./images/icons/btn.svg" : "./images/icons/btn-liked.svg"}
                        alt="add to order"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SneakersContain