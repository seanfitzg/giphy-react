import { combineReducers } from 'redux';

const defaultState = {
    images: [],
    searchTerm: ''
}
const searchResults = (state = defaultState, action) => {
    switch (action.type) {
        case 'SEARCH_FOR':
            return {
                images: [
                    {
                        id: 1,
                        name: 'image1'
                    },
                    {
                        id: 2,
                        name: 'image2'
                    }
                ],
                searchTerm: action.text
            };
        case 'CLEAR':
            return defaultState;
        default:
            return defaultState;
    }
};

export default combineReducers({
    searchResults
});
