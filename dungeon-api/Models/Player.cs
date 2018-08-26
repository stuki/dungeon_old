using dungeon_api.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace dungeon_api
{
    // The player is either the DM or any other actor in the session
    public class Player
    {
        public Player() => Sessions = new JoinCollectionFacade<Session, Player, PlayerSession>(this, PlayerSessions);

        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        private ICollection<PlayerSession> PlayerSessions { get; } = new List<PlayerSession>();

        [NotMapped]
        public ICollection<Session> Sessions;
    }
}