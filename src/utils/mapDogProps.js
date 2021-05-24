import { SET_DOG_PROPS } from './constants'

const mapDogProps = (message, dispatch, setDogProps, setLoading) => {
    const fetchedProps = [];
    let slug = 1;
    const getImages = (dogBreed) => {
        const images = []
        fetch(`https://dog.ceo/api/breed/${dogBreed}/images`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * data.message.length)
                const newIndex = randomIndex + i
                const newImage = data.message[ newIndex || randomIndex];
                images.push(newImage)
            }
        })
        return images
    }
    for (const breed in message) {
        fetchedProps.push({
            slug,
            breed,
            images: getImages(breed)
        })
        slug++
    }
    dispatch({ type: SET_DOG_PROPS, dogProps: fetchedProps })
}

export default mapDogProps