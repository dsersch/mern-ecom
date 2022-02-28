import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Home.module.css'
import { listGames } from '../../actions/gameActions.js'
import Card from '../utility/Card'
import LoadingSpinner from '../utility/LoadingSpinner'

const Home = () => {
    const dispatch = useDispatch()

    const gamesList = useSelector(state => state.gamesList)
    const { loading, error, games } = gamesList

    useEffect(() => {
        dispatch(listGames())
    }, [dispatch])

    return (
        <main className={classes['home']}>
            { loading ? <LoadingSpinner /> 
                : error ? <p>{error}</p>
                : games.map((game) => {
                    return <Card key={game.id} gameData={game} />
                })
            }
        </main>
    )
}

export default Home