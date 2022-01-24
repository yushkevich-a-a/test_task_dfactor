const initialState = {
    data: {
        city_name: '',
        lat: null,
        lng: null,
    },
    loading: false,
    error: null,
}

const serviceGeocoordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COORDINATE_REQUEST': 
            return {...state, loading: true, error: null};
        case 'COORDINATE_REQUEST_ERROR':
            const { message } = action.payload;
            return {...state, loading: false, error: message};
        case 'COORDINATE_REQUEST_SUCCESS': 
            const { data } = action.payload;
            return {...state, loading: false, data};
        case 'COORDINATE_DATA_RESET':
            return {...initialState};
        default: 
            return {...state};
    }
}

export default serviceGeocoordReducer;