﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dungeon_api.Models
{
    public interface IJoinEntity<TEntity>
    {
        TEntity Navigation { get; set; }
    }
}
