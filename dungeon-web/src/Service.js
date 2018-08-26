import fetchival from 'fetchival';

const baseurl = "https://dungeon.azurewebsites.net/api";

async function createSession(session) {
  const api = fetchival(baseurl);
  const sessions = api('sessions');
  console.log(session)
  sessions
    .post(session)
    .catch(function(err) {console.log("Session post:", err)})
}

async function createLog(log) {
    const api = fetchival(baseurl);
    const logs = api('logs');
    logs
      .post(log)
      .catch(function(err) {console.log("Log post:", err)})
  }
// Tähän tarvitaan vielä kyseisen session ID
// sekä kirjautuneet pelaajan ID, annetaan nämä
// uuden hahmon sessionId:ksi sekä playerId:ksi
async function createCharacter(character) {
    const api = fetchival(baseurl);
    const characters = api('characters');

    characters
      .post(character)
      .catch(function(err) {console.log("Character post:", err)})
  }

  async function getUser(user) {
    const api = fetchival(baseurl);
    const users = api('users');

    users
      .get(user)
      .catch(function(err) {console.log(err)})
  }


export { getUser, createSession, createCharacter, createLog }
