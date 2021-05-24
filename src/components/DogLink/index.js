import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

const DogLink = ({breed, slug}) => {
return (
    <Link className={styles.dogLink} to={`/dogs/${slug}`}>
        {breed}
    </Link>
)
}

export default DogLink