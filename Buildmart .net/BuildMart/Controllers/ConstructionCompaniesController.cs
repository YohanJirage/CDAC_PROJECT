using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BuildMart.Models;

namespace BuildMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConstructionCompaniesController : ControllerBase
    {
        private readonly NbuildmartContext _context;

        public ConstructionCompaniesController(NbuildmartContext context)
        {
            _context = context;
        }

        // GET: api/ConstructionCompanies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConstructionCompany>>> GetConstructionCompanies()
        {
          if (_context.ConstructionCompanies == null)
          {
              return NotFound();
          }
            return await _context.ConstructionCompanies.ToListAsync();
        }

        // GET: api/ConstructionCompanies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ConstructionCompany>> GetConstructionCompany(int id)
        {
          if (_context.ConstructionCompanies == null)
          {
              return NotFound();
          }
            var constructionCompany = await _context.ConstructionCompanies.FindAsync(id);

            if (constructionCompany == null)
            {
                return NotFound();
            }

            return constructionCompany;
        }

        // PUT: api/ConstructionCompanies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConstructionCompany(int id, ConstructionCompany constructionCompany)
        {
            if (id != constructionCompany.Id)
            {
                return BadRequest();
            }

            _context.Entry(constructionCompany).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConstructionCompanyExists(id))
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

        // POST: api/ConstructionCompanies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ConstructionCompany>> PostConstructionCompany(ConstructionCompany constructionCompany)
        {
          if (_context.ConstructionCompanies == null)
          {
              return Problem("Entity set 'NbuildmartContext.ConstructionCompanies'  is null.");
          }
            _context.ConstructionCompanies.Add(constructionCompany);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConstructionCompany", new { id = constructionCompany.Id }, constructionCompany);
        }

        // DELETE: api/ConstructionCompanies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConstructionCompany(int id)
        {
            if (_context.ConstructionCompanies == null)
            {
                return NotFound();
            }
            var constructionCompany = await _context.ConstructionCompanies.FindAsync(id);
            if (constructionCompany == null)
            {
                return NotFound();
            }

            _context.ConstructionCompanies.Remove(constructionCompany);
            await _context.SaveChangesAsync();

            return NoContent();
        }

      



        private bool ConstructionCompanyExists(int id)
        {
            return (_context.ConstructionCompanies?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
