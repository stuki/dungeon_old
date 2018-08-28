import fetchival from 'fetchival';

class Api {
  constructor(url = "https://dungeon.azurewebsites.net/api") {
    this.url = url;
    this.fetch = fetchival(this.url);
    this.players = this.fetch("players");
    this.sessions = this.fetch("sessions");
    this.characters = this.fetch("characters");
    this.logs = this.fetch("logs");
  }

  createPlayer = (player) => {
    const p = { name: player }
    this.players
      .post(p)
      .catch(err => console.error("Error creating player:", err.message));
  }

  getPlayer = async (name) => {
    return this.players(name)
      .get()
      .catch(err => console.error("Error getting player:", err.message));
  }

  createSession = (session) => {
    this.sessions
      .post(session)
      .catch(err => console.error("Error creating session:", err.message));
  }

  getSessions = async (id) => {
    const sessions = this.sessions("playerid")
    return sessions(id)
      .get()
      .catch(err => console.error("Error getting sessions:", err.message))
  }

  getSession = async (id) => {
    const sessions = this.sessions("id")
    return sessions(id)
      .get()
      .catch(err => console.error("Error getting sessions:", err.message))
  }

  joinSession = (id, player) => {
    this.sessions(id + "/join")
      .post(player)
      .catch(err => console.error("Error joining session:", err.message))
  }

  createCharacter = (character) => {
    this.characters
      .post(character)
      .catch(err => console.error("Error creating character:", err.message));
  }

  updateCharacter = (sessionId, playerId, character) => {
    const url = sessionId + "/" + playerId;
    this.characters(url)
      .put(character)
      .catch(err => console.error("Error creating character:", err.message));
  }

  getCharacter = async (sessionId, playerId) => {
    const url = sessionId + "/" + playerId;
    return this.characters(url)
      .get()
      .catch(err => console.error("Error getting character:", err.message));
  }

  createLog = (log) => {
    this.logs
      .post(log)
      .catch(err => console.error("Error creating log:", err.message));
  }

  getLogs = async (id) => {
    return this.logs(id)
      .get()
      .catch(err => console.error("Error getting log:", err.message));
  }

}

export default new Api();
