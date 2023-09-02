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
    public class IndividualCustomersController : ControllerBase
    {
        private readonly NbuildmartContext _context;

        public IndividualCustomersController(NbuildmartContext context)
        {
            _context = context;
        }

        // GET: api/IndividualCustomers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IndividualCustomer>>> GetIndividualCustomers()
        {
          if (_context.IndividualCustomers == null)
          {
              return NotFound();
          }
            return await _context.IndividualCustomers.ToListAsync();
        }

        // GET: api/IndividualCustomers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IndividualCustomer>> GetIndividualCustomer(int id)
        {
          if (_context.IndividualCustomers == null)
          {
              return NotFound();
          }
            var individualCustomer = await _context.IndividualCustomers.FindAsync(id);

            if (individualCustomer == null)
            {
                return NotFound();
            }

            return individualCustomer;
        }

        // PUT: api/IndividualCustomers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIndividualCustomer(int id, IndividualCustomer individualCustomer)
        {
            if (id != individualCustomer.Id)
            {
                return BadRequest();
            }

            _context.Entry(individualCustomer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IndividualCustomerExists(id))
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

        // POST: api/IndividualCustomers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<IndividualCustomer>> PostIndividualCustomer(IndividualCustomer individualCustomer)
        {
          if (_context.IndividualCustomers == null)
          {
              return Problem("Entity set 'NbuildmartContext.IndividualCustomers'  is null.");
          }
            _context.IndividualCustomers.Add(individualCustomer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIndividualCustomer", new { id = individualCustomer.Id }, individualCustomer);
        }

        // DELETE: api/IndividualCustomers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIndividualCustomer(int id)
        {
            if (_context.IndividualCustomers == null)
            {
                return NotFound();
            }
            var individualCustomer = await _context.IndividualCustomers.FindAsync(id);
            if (individualCustomer == null)
            {
                return NotFound();
            }

            _context.IndividualCustomers.Remove(individualCustomer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IndividualCustomerExists(int id)
        {
            return (_context.IndividualCustomers?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [HttpPost("/customerRegister")]
        public async Task<ActionResult<string>> RegisterCustomer([FromBody] CustomerRegistration cr)
        {

            User s = new User(cr.ans, cr.pwd, cr.uname, cr.qid, 1);
            _context.Users.Add(s);
            await _context.SaveChangesAsync();

            IndividualCustomer b = new IndividualCustomer(cr.cno, cr.email, cr.fname, cr.lname, s.Id);
            _context.IndividualCustomers.Add(b);
            await _context.SaveChangesAsync();

            return Ok("success");




        }


    }
}




