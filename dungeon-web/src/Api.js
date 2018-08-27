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
    this.players
      .post(player)
      .catch(err => console.log("Error creating player:", err));
  }

  getPlayer = async (name) => {
    return this.players(name)
      .get()
      .catch(err => console.log("Error getting player:", err));
  }

  createSession = (session) => {
    this.sessions
      .post(session)
      .catch(err => console.log("Error creating session:", err));
  }

  getSessions = async (id) => {
    const sessions = this.sessions("playerid")
    return sessions(id)
      .get()
      .catch(err => console.log("Error getting sessions", err))
  }

  getSession = async (id) => {
    const sessions = this.sessions("id")
    return sessions(id)
      .get()
      .catch(err => console.log("Error getting sessions", err))
  }

  createCharacter = (character) => {
    this.characters
      .post(character)
      .catch(err => console.log("Error creating character:", err));
  }

  getCharacter = async (sessionId, playerId) => {
    return this.characters(sessionId + "/" + playerId)
      .get()
      .catch(err => console.log("Error getting character:", err));
  }

  createLog = (log) => {
    this.logs
      .post(log)
      .catch(err => console.log("Error creating log:", err));
  }

  getLogs = async (id) => {
    return this.logs(id)
      .get()
      .catch(err => console.log("Error getting log:", err));
  }

}

export default new Api();
