using dungeon_api.Models;
using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    // Table containing each session a player is part of
    public class PlayerSession : IJoinEntity<Player>, IJoinEntity<Session>
    {
        public int PlayerId { get; set; }
        public Player Player { get; set; }
        Player IJoinEntity<Player>.Navigation
        {
            get => Player;
            set => Player = value;
        }
        public int SessionId { get; set; }
        public Session Session { get; set; }
        Session IJoinEntity<Session>.Navigation
        {
            get => Session;
            set => Session = value;
        }
    }
}