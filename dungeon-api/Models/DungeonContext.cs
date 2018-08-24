using System;
using System.Collections.Generic;
using System.Linq;
using System.Configuration;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace dungeon_api
{
    public class DungeonContext : DbContext
    {
        public DungeonContext(DbContextOptions<DungeonContext> options) : base(options) { }

        public DbSet<Player> Players { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<PlayerSession> PlayerSessions { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<Log> Logs { get; set; }


        #region DATASEEDING
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>().HasData(
                new { Id = 1, Name = "Oscar" },
                new { Id = 2, Name = "Henni" },
                new { Id = 3, Name = "Riikka" } );

            modelBuilder.Entity<Session>().HasData(
                new { Id = 1, Name = "Oscars Session", CreatorId = 1, DungeonMasterId = 1, CreatedAt = DateTime.Now},
                new { Id = 2, Name = "Hennis Session", CreatorId = 2, DungeonMasterId = 2, CreatedAt = DateTime.Now },
                new { Id = 3, Name = "Riikkas Session", CreatorId = 3, DungeonMasterId = 1, CreatedAt = DateTime.Now });

            modelBuilder.Entity<PlayerSession>().HasData(
                new { Id = 1, PlayerId = 1, SessionId = 1 },
                new { Id = 2, PlayerId = 1, SessionId = 2 },
                new { Id = 3, PlayerId = 1, SessionId = 3 },
                new { Id = 4, PlayerId = 2, SessionId = 2 },
                new { Id = 5, PlayerId = 2, SessionId = 1 },
                new { Id = 6, PlayerId = 3, SessionId = 3 },
                new { Id = 7, PlayerId = 3, SessionId = 2 },
                new { Id = 8, PlayerId = 3, SessionId = 1 });

            modelBuilder.Entity<Character>().HasData(
                new { Id = 1, Name = "Oscar", Charisma = 10, Constitution = 11, Dexterity = 12, Intelligence = 13, Strength = 14, Wisdom = 15, Armor = 1, Coin = 200, Damage = 6, Hitpoints = 21, Level = 1, PlayerId = 1, XP = 5, Alignment = "chaotic", SessionId = 2 },
                new { Id = 2, Name = "Henni", Charisma = 10, Constitution = 11, Dexterity = 12, Intelligence = 13, Strength = 14, Wisdom = 15, Armor = 1, Coin = 200, Damage = 6, Hitpoints = 21, Level = 1, PlayerId = 2, XP = 5, Alignment = "chaotic", SessionId = 1 },
                new { Id = 3, Name = "Riikka", Charisma = 10, Constitution = 11, Dexterity = 12, Intelligence = 13, Strength = 14, Wisdom = 15, Armor = 1, Coin = 200, Damage = 6, Hitpoints = 21, Level = 1, PlayerId = 3, XP = 5, Alignment = "chaotic", SessionId = 1 });

            modelBuilder.Entity<Log>().HasData(
                new { Id = 1, PlayerId = 1, SessionId = 1, Text = "Oscar writes some code", Label = "event", CreatedAt = DateTime.Now },
                new { Id = 2, PlayerId = 1, SessionId = 1, Text = "Henni writes some code", Label = "message", CreatedAt = DateTime.Now },
                new { Id = 3, PlayerId = 1, SessionId = 1, Text = "Oscar writes some code", Label = "event", CreatedAt = DateTime.Now },
                new { Id = 4, PlayerId = 1, SessionId = 1, Text = "Henni writes some code", Label = "message", CreatedAt = DateTime.Now },
                new { Id = 5, PlayerId = 1, SessionId = 1, Text = "Oscar writes some code", Label = "event", CreatedAt = DateTime.Now },
                new { Id = 6, PlayerId = 1, SessionId = 1, Text = "Henni writes some code", Label = "message", CreatedAt = DateTime.Now },
                new { Id = 7, PlayerId = 1, SessionId = 1, Text = "Oscar writes some code", Label = "event", CreatedAt = DateTime.Now },
                new { Id = 8, PlayerId = 1, SessionId = 1, Text = "Henni writes some code", Label = "message", CreatedAt = DateTime.Now },
                new { Id = 9, PlayerId = 1, SessionId = 1, Text = "Riikka writes some code", Label = "note", CreatedAt = DateTime.Now });
        }
        #endregion
    }
}
    