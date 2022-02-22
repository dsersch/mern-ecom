import classes from './Card.module.css'

const Card = () => {
    return (
        <div className={classes['card']}>
            <div className={classes['image-area']}>
            </div>
            <div className={classes['info-box']}>
                <p className={classes['description']}>this is test description text. this is test description text.</p>
                <button className={classes['add-to-cart']}>$20.99</button>
            </div>
        </div>
    )
}

export default Card