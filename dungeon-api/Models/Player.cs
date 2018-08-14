using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    public class Player
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}