import fetchival from 'fetchival';

class Api {
  constructor(url = 'https://dungeon.azurewebsites.net/api') {
    this.url = url;
    this.fetch = fetchival(this.url);
    this.players = this.fetch('players');
    this.sessions = this.fetch('sessions');
    this.characters = this.fetch('characters');
    this.logs = this.fetch('logs');
  }


  createPlayer = (player) => {
    this.players
      .post(player)
      .catch(err =>  console.log(err))
  }

  getPlayer = async (name) => {
    return (this.players(name).get()
    .catch(err => console.log(err)))
  }

  createSession = (session) => {
    return this.sessions
      .post(session)
      .catch(err => console.log(err))
  }

  getSessions = async (id) => {
    const sessions = this.sessions('playerId');
    return sessions(id)
      .get()
      .catch(err => console.log(err))
  }

  getSession = async (id) => {
    const sessions = this.sessions('id');
    return sessions(id)
      .get()
      .catch(err => console.log(err));
  }

  deleteSession = async id => {
    this.sessions(id)
      .delete()
      .catch(err => console.log(err))
  }
  joinSession = (id, player) => {
    this.sessions(`${id}/join`)
      .post(player)
      .catch(err => console.log(err))
  }

  updateSession = (session) => {
    this.sessions(`id/${session.id}`)
      .put(session)
      .catch(err => console.log(err))
  }

  createCharacter = (character) => {
    this.characters
      .post(character)
      .catch(err => console.log(err))
  }

  updateCharacter = (character) => {
    const url = `${character.sessionId}/${character.playerId}`;
    this.characters(url)
      .put(character)
      .catch(err => console.log(err))
  }

  getCharacter = async (sessionId, playerId) => {
    const url = `${sessionId}/${playerId}`;
    return this.characters(url)
      .get()
      .catch(err => console.log(err))
  }

  deleteCharacter = (character) => {
    return this.characters(character.id)
      .delete()
      .catch(err => console.log(err))
  }

  createLog = (log) => {
    this.logs
      .post(log)
      .catch(err => console.log(err))
  }

  getLogs = async id => this.logs(id)
    .get()
    .catch(err =>  console.log(err))

  updateLog = (log) => {
    this.logs(log.id)
      .put(log)
      .catch(err =>  console.log(err))
  }
}

export default new Api();
