
export const getTokenFromURL = () => {
    return window.location.hash
    // window.location.hash
    // REtorna la parate ancla de una URL
    
    .substring(1).split('&')
    //substring(1) extrae el primer carater
    //y imprime el resto de la cadena hasat el fina
    //split divide un string en un array de cadenas
    //mediante la separacion ('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial
    }, {});
}

const endpoint = ' https://accounts.spotify.com/authorize'
const clientID = '93405f89318545de90d5426491f35843'
const redirectUri = 'http://localhost:3000/'
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]
export const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope${scopes.join("%20")}&show_dialog=true`
