import React from 'react'
import styles from './index.module.css'

const DogGallery = ({currentDogProps}) => {
    return(
        <>
        <h1 className={styles.headline}>{currentDogProps.breed}</h1>
        <div className={styles.gallery}>
            {currentDogProps.images.map(image => <img key={currentDogProps.slug} className={styles.dogImage} src={image} alt={currentDogProps.breed} />)}
        </div>
        </>
    )
}

export default DogGallery