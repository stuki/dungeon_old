using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    // For each session, a player must have a character which contains
    // essential character data
    public class Character
    {
        public int Id { get; set; }
        [Required]
        public int Name { get; set; }
        [Required]
        public int SessionId { get; set; }
        public Session Session { get; set; }
        [Required]
        public int PlayerId { get; set; }

        public int Constitution { get; set; }
        public int Charisma { get; set; }
        public int Dexterity { get; set; }
        public int Intelligence { get; set; }
        public int Strength { get; set; }
        public int Wisdom { get; set; }

        public string Data { get; set; }
    }
}