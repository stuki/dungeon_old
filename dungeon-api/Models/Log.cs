﻿using System;
using System.ComponentModel.DataAnnotations;

namespace dungeon_api
{
    // Log can contain either history, actions, points of interest,
    // messages, player joins
    public class Log
    {
        public int Id { get; set; }
        [Required]
        public string SessionId { get; set; }
        public Session Session { get; set; }
        public int PlayerId { get; set; }
        public DateTime CreatedAt { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public string Label { get; set; }
    }
}