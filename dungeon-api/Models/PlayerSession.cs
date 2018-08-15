using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    public class PlayerSession
    {
        public int Id { get; set; }
        [Required]
        public int PlayerId { get; set; }
        public Player Player { get; set; }
        [Required]
        public int SessionId { get; set; }
        public Session Session { get; set; }
    }
}