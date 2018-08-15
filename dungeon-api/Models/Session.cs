using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    public class Session
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
        public List<Log> Logs { get; set; }
        public List<PlayerSession> PlayerSessions { get; set; }
    }
}