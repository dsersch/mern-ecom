import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes['card']}>
            <div className={classes['image-area']}
                style={{backgroundImage: `url(${props.gameData.background_image})`}}
            >
            </div>
            <div className={classes['info-box']}>
                <p className={classes['description']}>{props.gameData.name}</p>
                <button className={classes['add-to-cart']}>$20.99</button>
            </div>
        </div>
    )
}

export default Card