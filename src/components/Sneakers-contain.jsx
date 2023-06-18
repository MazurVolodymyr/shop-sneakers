const SneakersContain = () =>{
    return(
        <div className='sneakers-contain'>
            <div className='sneakers-body'>
                <div className='heart'>
                    <img src="./images/icons/heart.svg" alt="like" />
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
                            <img src="./images/icons/btn.svg" alt="add to order" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SneakersContain