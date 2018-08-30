import fetchival from 'fetchival';
// import { toastr } from 'react-redux-toastr';

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
      .catch(err =>  console.log(err))//toastr.error('Problem registering', err.message))
  }

  getPlayer = async (name) => {
    return (this.players(name).get()
    .catch(err => console.log(err)))
  }

  createSession = (session) => {
    return this.sessions
      .post(session)
      .catch(err => console.log(err))//toastr.error('Failed to create session', err.message))
      // .then(json => toastr.success('Session created', `Send ${json.url} to your friends, password is ${json.password}`));
  }

  getSessions = async (id) => {
    const sessions = this.sessions('playerId');
    return sessions(id)
      .get()
      .catch(err => console.log(err))//toastr.error('Failed to get sessions', err.message));
  }

  getSession = async (id) => {
    const sessions = this.sessions('id');
    return sessions(id)
      .get()
      .catch(err => console.log(err));
      //toastr.error('Failed to open session', err.message));
  }

  deleteSession = async id => {
    this.sessions(id)
      .delete()
      .catch(err => console.log(err))//toastr.error('Cannot delete session', err.message))
      // .then(() => toastr.success('Session deleted successfully'))};
  }
  joinSession = (id, player) => {
    this.sessions(`${id}/join`)
      .post(player)
      .catch(err => console.log(err))//toastr.error('Failed to join session', err.message))
      // .then(() => toastr.success('Successfully joined session'));
  }

  updateSession = (session) => {
    this.sessions(`id/${session.id}`)
      .put(session)
      .catch(err => console.log(err))//toastr.error('Failed to update session settings', err.message))
      // .then(() => toastr.success('Updated session settings'));
  }

  createCharacter = (character) => {
    this.characters
      .post(character)
      .catch(err => console.log(err))//toastr.error('Failed to create character', err.message))
      // .then(json => toastr.success(`Character ${json.name} created`));
  }

  updateCharacter = (character) => {
    const url = `${character.sessionId}/${character.playerId}`;
    this.characters(url)
      .put(character)
      .catch(err => console.log(err))//toastr.error('Failed to update character sheet', err.message))
      // .then(() => toastr.success('Character sheet update successful'));
  }

  getCharacter = async (sessionId, playerId) => {
    const url = `${sessionId}/${playerId}`;
    return this.characters(url)
      .get()
      .catch(err => console.log(err))//toastr.error('Failed to fetch character', err.message));
  }

  deleteCharacter = (character) => {
    return this.characters(character.id)
      .delete()
      .catch(err => console.log(err))//toastr.error('Failed to fetch character', err.message));
  }

  createLog = (log) => {
    this.logs
      .post(log)
      .catch(err => console.log(err))//toastr.error('Failed to update journey', err.message));
  }

  getLogs = async id => this.logs(id)
    .get()
    .catch(err =>  console.log(err))//toastr.error('Failed to populate journey', err.message))

  updateLog = (log) => {
    this.logs(log.id)
      .put(log)
      .catch(err =>  console.log(err))//toastr.error('Failed to update log', err.message));
  }
}

export default new Api();
