import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGameDetails } from '../../actions/gameActions.js'
// import { addToCart } from '../../actions/cartActions.js'
import classes from './GameDetails.module.css'
import Screen from '../utility/Screen.jsx'
import ErrorMessage from '../utility/ErrorMessage.jsx'
import LoadingSpinner from '../utility/LoadingSpinner'

const GameDetails = () => {
    const dispatch = useDispatch()
    let params = useParams()

    const gameDetails = useSelector(state => state.gameDetails)
    const { loading, error, game } = gameDetails

    
    useEffect(() => {
        dispatch(getGameDetails(params.id))
    }, [params.id, dispatch])

    const addToCartHandler = () => {
       dispatch({
           type: 'CART_ADD_ITEM',
           payload: game,
       })
    }

    return (
        <Screen>
            { loading ? <LoadingSpinner /> 
                : error ? <ErrorMessage errorMessage={error.message} />
                : <main>
                    <div className={classes['hero-image']} style={{backgroundImage: `url(${game.background_image})`}}></div>
                    <h1 className={classes['heading-text']}>{game.name}</h1>
                    <p className={classes['released']}>Release Date: {game.released}</p>
                    <div className={classes['description']} 
                        dangerouslySetInnerHTML={{ __html: game.description}}>
                    </div>
                    <div className={classes['price']}>${game.price}</div>
                    <button className={classes['add-to-cart']} onClick={addToCartHandler}>Add To Cart</button>
                </main>
            }
        </Screen>
    )
}

export default GameDetails