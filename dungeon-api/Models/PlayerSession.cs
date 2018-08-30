using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    // Table containing each session a player is part of
    public class PlayerSession
    {
        [Required]
        public int PlayerId { get; set; }
        public Player Player { get; set; }
        [Required]
        public string SessionId { get; set; }
        public Session Session { get; set; }
    }
}