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
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
            base.OnConfiguring(optionsBuilder);
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PlayerSession>()
                .HasKey(s => new { s.PlayerId, s.SessionId });

            modelBuilder.Entity<PlayerSession>()
                .HasOne(ps => ps.Player).WithMany("PlayerSessions");

            modelBuilder.Entity<PlayerSession>()
                .HasOne(ps => ps.Session).WithMany("PlayerSessions");

            #region DATASEEDING

            //var players = new[]
            //{
            //    new Player { Id = 1, Name = "Oscar" },
            //    new Player { Id = 2, Name = "Henni" },
            //    new Player { Id = 3, Name = "Riikka" }
            //};

            //var sessions = new[]
            //{
            //    new Session { Id = 1, Name = "Oscars Session", Password = "1234", CreatorId = 1, DungeonMasterId = 1, CreatedAt = DateTime.Now },
            //    new Session { Id = 2, Name = "Hennis Session", Password = "1234", CreatorId = 2, DungeonMasterId = 2, CreatedAt = DateTime.Now },
            //    new Session { Id = 3, Name = "Riikkas Session", Password = "1234", CreatorId = 3, DungeonMasterId = 1, CreatedAt = DateTime.Now }
            //};

            //var characters = new[]
            //{
            //    new Character { Id = 1, Name = "Oscar", Charisma = 10, Constitution = 11, Dexterity = 12, Intelligence = 13, Strength = 14, Wisdom = 15, Armor = 1, Coin = 200, Damage = 6, Hitpoints = 21, Level = 1, PlayerId = 1, XP = 5, Alignment = "chaotic"},
            //    new Character { Id = 2, Name = "Henni", Charisma = 10, Constitution = 11, Dexterity = 12, Intelligence = 13, Strength = 14, Wisdom = 15, Armor = 1, Coin = 200, Damage = 6, Hitpoints = 21, Level = 1, PlayerId = 2, XP = 5, Alignment = "chaotic"},
            //    new Character { Id = 3, Name = "Riikka", Charisma = 10, Constitution = 11, Dexterity = 12, Intelligence = 13, Strength = 14, Wisdom = 15, Armor = 1, Coin = 200, Damage = 6, Hitpoints = 21, Level = 1, PlayerId = 3, XP = 5, Alignment = "chaotic"}
            //};

            //var logs = new[]
            //{
            //    new Log { Id = 1, PlayerId = 1, Text = "Oscar writes some code", Label = "event", CreatedAt = DateTime.Now },
            //    new Log { Id = 2, PlayerId = 1, Text = "Henni writes some code", Label = "message", CreatedAt = DateTime.Now },
            //    new Log { Id = 3, PlayerId = 1, Text = "Riikka writes some code", Label = "note", CreatedAt = DateTime.Now }
            //};
            
            //var playerSessions = new[]
            //{
            //    new PlayerSession { PlayerId = 1, SessionId = 1 },
            //    new PlayerSession { PlayerId = 2, SessionId = 1 },
            //    new PlayerSession { PlayerId = 2, SessionId = 2 },
            //    new PlayerSession { PlayerId = 2, SessionId = 3 },
            //    new PlayerSession { PlayerId = 3, SessionId = 1 },
            //    new PlayerSession { PlayerId = 3, SessionId = 2 },
            //    new PlayerSession { PlayerId = 3, SessionId = 3 }
            //};

            //sessions[0].Players.Add(players[0]);
            //sessions[0].Players.Add(players[1]);
            //sessions[0].Players.Add(players[2]);
            //sessions[1].Players.Add(players[1]);
            //sessions[1].Players.Add(players[2]);
            //sessions[2].Players.Add(players[1]);
            //sessions[2].Players.Add(players[2]);
            //sessions[0].Characters.Add(characters[1]);
            //sessions[0].Characters.Add(characters[2]);
            //sessions[1].Characters.Add(characters[0]);
            //sessions[0].Logs.Add(logs[0]);
            //sessions[0].Logs.Add(logs[1]);
            //sessions[0].Logs.Add(logs[2]);
            //sessions[2].Logs.Add(logs[0]);
            //sessions[2].Logs.Add(logs[1]);
            //sessions[2].Logs.Add(logs[2]);
            //sessions[3].Logs.Add(logs[1]);
            //sessions[0].PlayerSessions.Add(playerSessions[0]);



            //modelBuilder.Entity<Player>().HasData(players);

            //modelBuilder.Entity<Character>().HasData(characters);

            //modelBuilder.Entity<Log>().HasData(logs);

            //modelBuilder.Entity<PlayerSession>().HasData(playerSessions);

            //modelBuilder.Entity<Session>().HasData(sessions);
        #endregion
        }
    }
}
    