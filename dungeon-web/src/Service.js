import fetchival from 'fetchival';

const baseurl = "https://dungeon.azurewebsites.net/api";

async function createSession(session) {
  const api = fetchival(baseurl);
  const sessions = api('sessions');

  sessions
    .post(session)
    .catch(function(err) {console.log(err)})
}

async function createLog(log) {
    const api = fetchival(baseurl);
    const logs = api('logs');
    logs
      .post(log)
      .catch(function(err) {console.log(err)})
  }
// Tähän tarvitaan vielä kyseisen session ID
// sekä kirjautuneet pelaajan ID, annetaan nämä
// uuden hahmon sessionId:ksi sekä playerId:ksi
async function createCharacter(character) {
    const api = fetchival(baseurl);
    const characters = api('characters');

    characters
      .post(character)
      .catch(function(err) {console.log(err)})
  }

async function getUser(name) {
    var players = fetchival(baseurl + "/players/" + name);
    const playerName = await players.get();
    console.log(playerName);
}


export { getUser, createSession, createCharacter, createLog }
