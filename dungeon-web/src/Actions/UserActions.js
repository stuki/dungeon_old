//Tehdään typestä constant, sillä sitä
// tullaan käyttämään myös reducerissa
export const UPDATE_USER = 'users:updateUser';
export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}