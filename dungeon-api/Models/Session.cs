using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    // Each group of people playing Dungeon World is a session,
    // in which there are logs and players. The player who creates
    // the session is the admin and the default DM of the session
    public class Session
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        [Required]
        public int CreatorId { get; set; }
        [Required]
        public int DungeonMasterId { get; set; }
        [Required]
        public string Name { get; set; }
        public string Password { get; set; }
        public ICollection<Log> Logs { get; set; }
        public ICollection<PlayerSession> PlayerSessions { get; set; }
        public ICollection<Character> Characters { get; set; }
    }
}