import { UPDATE_USER } from '../Actions/UserActions';

// Käyttämällä aaltosulkuja actionin tilalla, ei
// tarvitse enää käyttää pistenotaatiota action.type,
// tai action.payload etc. //tässä oli action
export default function userReducer(state = '', { type, payload }) {
    // Tässä oli action.type
    switch (type) {
        case UPDATE_USER:
        // Tässä oli aiemmin action.payload
            return payload.user;
        default:
            return state;
    }
}