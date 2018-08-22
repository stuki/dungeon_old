import fetchival from 'fetchival';

const baseurl = "https://dungeon-api20180821104258.azurewebsites.net/api/";

async function createSession(name, id) {
  const api = fetchival(baseurl);
  const sessions = api('sessions');

  sessions
    .post({ "CreatorId": id, "Name": name })
    .catch(function(err) {console.log(err)})
}

async function getUser(name) {
    var players = fetchival(baseurl + "players/" + name);
    const playerName = await players.get();
    console.log(playerName);
}

export { getUser, createSession }

