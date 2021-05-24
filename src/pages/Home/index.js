import React, {useContext} from 'react'
import { DogContext } from '../../contexts/DogContext'
import DogLink from '../../components/DogLink'
import styles from './index.module.css'

const Home = () => {
    const { dogProps, fetchingAllProps } = useContext(DogContext)
    if (fetchingAllProps) return <h1>Loading...</h1>
    return(
        <div className={styles.dogList}>
        <h1>All Available Breeds</h1>
        {dogProps.map(prop => (
            <DogLink 
                key={prop.slug}
                breed={prop.breed}
                slug={prop.slug}
                 />
            ))}
        </div>
    )
}

export default Home