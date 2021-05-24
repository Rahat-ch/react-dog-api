import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

const DogLink = ({ nextDogProps }) => {
    return (
        <div className={styles.linkWrapper}>
        <Link to={`/dogs/${nextDogProps.slug}`}>
        <p>See next breed:  {nextDogProps.breed}</p>
            <img className={styles.linkImg} src={nextDogProps.images[0]} alt={nextDogProps.breed} />
        </Link>
        </div>
    )
}

export default DogLink