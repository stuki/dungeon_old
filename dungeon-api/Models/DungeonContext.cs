using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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
    }
}
    