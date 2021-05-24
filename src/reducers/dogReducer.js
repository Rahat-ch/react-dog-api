import { SET_DOG_PROPS, SINGLE_DOG_PROPS} from '../utils/constants'

const authReducer = (state, action) => {
    switch (action.type) {
        case SET_DOG_PROPS:
            return { ...state, dogProps: action.dogProps, fetchingAllProps: false }
        case SINGLE_DOG_PROPS:
            const slug = parseInt(action.slug)
            const nextSlug = slug + 1
            const currentDogProps = action.dogProps.filter(prop => prop.slug === slug)[0]
            const nextDogProps = action.dogProps.filter(prop => prop.slug === nextSlug)[0]
            return { ...state, currentDogProps, nextDogProps, fetchingSingleProps: false}
        default:
            return state
    }
}

export default authReducer;
