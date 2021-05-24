import React, { useContext, useState, useEffect } from 'react'
import DogGallery from '../../components/DogGallery'
import NextDogLink from '../../components/NextDogLink'
import { useParams, Link } from 'react-router-dom'
import { DogContext } from '../../contexts/DogContext'
import { SINGLE_DOG_PROPS } from '../../utils/constants'

const SingleDog = () => {
    const { fetchingSingleProps, dogProps, currentDogProps, nextDogProps, dispatch } = useContext(DogContext)
    const { slug } = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(dogProps){
            dispatch({ type: SINGLE_DOG_PROPS, slug, dogProps })
            setLoading(fetchingSingleProps)
        }
    },[dispatch, slug, fetchingSingleProps, dogProps])
    if(loading) return <h1>Loading...</h1>
    return(
        <>
        <Link to='/dogs'>See all Available Breeds</Link>
        {
         currentDogProps && <DogGallery key={currentDogProps.slug} currentDogProps={currentDogProps} />
        }
        {
         nextDogProps && <NextDogLink key={nextDogProps.slug} nextDogProps={nextDogProps} />
        }
        </>
    )
}

export default SingleDog