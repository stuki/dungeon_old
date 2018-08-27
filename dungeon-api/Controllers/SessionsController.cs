using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dungeon_api;

namespace dungeon_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionsController : ControllerBase
    {
        private readonly DungeonContext _context;

        public SessionsController(DungeonContext context)
        {
            _context = context;
        }

        // GET: api/Sessions
        [HttpGet]
        public IEnumerable<Session> GetSessions()
        {
            return _context.Sessions;
        }

        // GET: api/Sessions/playerid/5
        [HttpGet("playerid/{id}")]
        public ActionResult<IEnumerable<Session>> GetSessions([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var session = _context.Players.Where(p => p.Id == id).SelectMany(p => p.PlayerSessions).Select(ps => ps.Session);

            if (session == null)
            {
                return NotFound();
            }

            return Ok(session);
        }

        // GET: api/Sessions/id/5
        [HttpGet("id/{id}")]
        public async Task<IActionResult> GetSession([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var session = await _context.Sessions.FindAsync(id);

            session.PlayerSessions = _context.Sessions.Where(p => p.Id == id).SelectMany(p => p.PlayerSessions).ToList();

            if (session == null)
            {
                return NotFound();
            }

            return Ok(session);
        }

        // PUT: api/Sessions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSession([FromRoute] int id, [FromBody] Session session)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != session.Id)
            {
                return BadRequest();
            }
            _context.Entry(session).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SessionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Sessions
        [HttpPost]
        public async Task<IActionResult> PostSession([FromBody] Session session)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Random rnd = new Random();
            string code = rnd.Next(0, 999).ToString().PadLeft(4, '0');

            session.CreatedAt = DateTime.Now;
            session.DungeonMasterId = session.CreatorId;
            session.Password = code;

            _context.Sessions.Add(session);

            PlayerSession playerSession = new PlayerSession(){ 

                PlayerId = session.CreatorId,
                SessionId = session.Id
            };

            _context.PlayerSessions.Add(playerSession);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSession", new { id = session.Id }, session);
        }

        // DELETE: api/Sessions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSession([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var session = await _context.Sessions.FindAsync(id);
            if (session == null)
            {
                return NotFound();
            }

            _context.Sessions.Remove(session);
            await _context.SaveChangesAsync();

            return Ok(session);
        }

        private bool SessionExists(int id)
        {
            return _context.Sessions.Any(e => e.Id == id);
        }
    }
}