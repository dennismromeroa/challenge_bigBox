import { GET_CATEGORY } from '../../constans';

const initialState = {
    category: [],

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return { ...state, category: action.category };
        default:
            return state;
    }
}