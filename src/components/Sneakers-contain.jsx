import React from 'react';

const SneakersContain = (props) =>{
    const [isAdded, setIsAdded] = React.useState(true)

    const onClickPlus = () =>{
        setIsAdded(!isAdded)
    }

    return(
        <div className='sneakers-contain'>
            <div className='sneakers-body'>
                <div className='heart' >
                    <img src="./images/icons/heart.svg" alt="like"/>
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
                        <img onClick={onClickPlus} src={ isAdded ? "./images/icons/btn.svg" : "./images/icons/btn-liked.svg"}
                        alt="add to order"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SneakersContain