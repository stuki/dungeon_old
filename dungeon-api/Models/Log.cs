using System;
using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    public class Log
    {
        public int Id { get; set; }
        [Required]
        public int SessionId { get; set; }
        public Session Session { get; set; }
        public DateTime CreatedAt { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public string Label { get; set; }
    }
}