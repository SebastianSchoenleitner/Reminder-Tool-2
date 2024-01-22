using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace WebApplication3.Model
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReminderController : Controller
    {

        private readonly ReminderContext _context;
        public ReminderController(ReminderContext dbContext)
        {
            _context = dbContext;
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(Reminder newReminder)
        { 
            if(ModelState.IsValid) 
            {
                _context.Reminders.Add(newReminder);
                _context.SaveChanges();
                return RedirectToAction("Index");

            }
            return View(newReminder);
        }
        public IActionResult Edit(int id)
        {
            var reminder = _context.Reminders.Find(id);
            if (reminder == null)
            {
                return NotFound();
            }
            return View(reminder);
        }

        [HttpPost]
        public IActionResult Edit(int id, Reminder updatedReminder)
        {
            if (id != updatedReminder.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _context.Update(updatedReminder);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(updatedReminder);
        }
        [HttpPost]
        public async Task<IActionResult> SaveReminder([FromBody] Reminder reminder)
        {
            if (ModelState.IsValid)
            {
                // Add the reminder to the database
                _context.Reminders.Add(reminder);
                await _context.SaveChangesAsync();

                return Ok(new { Message = "Reminder saved successfully!" });
            }

            return BadRequest(new { Message = "Invalid data provided." });
        }

        public async Task<IActionResult> GetAllReminders()
        {
            var reminders = await _context.Reminders.ToListAsync();
            return Ok(reminders);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetReminderById(int id)
        {
            var reminder = await _context.Reminders.FindAsync(id);

            if (reminder == null)
            {
                return NotFound(); // Return 404 if the reminder with the specified id is not found
            }

            return Ok(reminder);
        }

    }
}
