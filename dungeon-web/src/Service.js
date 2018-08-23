import fetchival from 'fetchival';

const baseurl = "https://dungeon.azurewebsites.net/api";

async function createSession(name, id) {
  const api = fetchival(baseurl);
  const sessions = api('sessions');

  sessions
    .post({ "CreatorId": id, "Name": name })
    .catch(function(err) {console.log(err)})
}

async function createLog(label, text) {
    const api = fetchival(baseurl);
    const logs = api('logs');
  
    logs
      .post({ "Label": label, "Text": text })
      .catch(function(err) {console.log(err)})
  }

async function createCharacter(character) {
    const api = fetchival(baseurl);
    const characters = api('characters');

    characters
      .post({ character })
      .catch(function(err) {console.log(err)})
  }

async function getUser(name) {
    var players = fetchival(baseurl + "players/" + name);
    const playerName = await players.get();
    console.log(playerName);
}


export { getUser, createSession, createCharacter, createLog }

