import Axios from "axios";

const ADDGREETING = "ADDGREETING";

export const addGreeting = (greeting) => ({ type: ADDGREETING, payload: greeting });

export const fetchGreeting = () => async (dispatch) => {
    try{
        const res = await Axios.get('http://127.0.0.1:3000/api/v1/greetings');
        console.log(res.data.message);
        dispatch(addGreeting(res.data.message));

    } catch (err) {
        console.log(err);
    }
};


const greetingReducer = (state = [], action) => {
    switch (action.type) {
        case ADDGREETING:
            return action.payload;
        default:
            return state;
    }
}

export default greetingReducer;