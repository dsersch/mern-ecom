import classes from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className={classes['card']}>
            <div className={classes['image-area']}
                style={{backgroundImage: `url(${props.gameData.background_image})`}}
            >
            </div>
            <div className={classes['info-box']}>
                <p className={classes['description']}>{props.gameData.name}</p>
                <Link to={`games/${props.gameData.id}`}>
                    <button className={classes['add-to-cart']}>INFO</button>
                </Link>
            </div>
        </div>
    )
}

export default Card