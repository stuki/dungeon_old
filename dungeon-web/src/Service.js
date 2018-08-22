import fetchival from 'fetchival';
const baseurl = "https://dungeon-api20180821104258.azurewebsites.net/";

async function getUser(name) {
    var players = fetchival(baseurl + "api/players/" + name);
    const playerName = await players.get();
    console.log(playerName);
}


export { getUser }


