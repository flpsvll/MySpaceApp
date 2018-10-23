import { FETCH_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
        console.log(action.payload.data); 
        // [ post1, post2 ] // { 4: post }
        default:
            return state;
    }
}