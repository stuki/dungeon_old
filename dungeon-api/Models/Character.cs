using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    // For each session, a player must have a character which contains
    // essential character data
    public class Character
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
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

		public string Looks { get; set; }
		public int Armor { get; set; }
		public int Level { get; set; }
		public int XP { get; set; }
		public int Hitpoints { get; set; }
		public int Damage { get; set; }
		public string Alignment { get; set; }
		public string Gear { get; set; }
		public string Race { get; set; }
		public string Bonds { get; set; }
		public string Startingmoves { get; set; }
		public string Advancedmoves { get; set; }
		public int Coin { get; set; }
		public string Spells { get; set; }
	}
}