using Microsoft.EntityFrameworkCore;

namespace WebApplication3.Model
{
    public class ReminderContext : DbContext
    {
        public DbSet<Reminder> Reminders { get; set; }

        public ReminderContext(DbContextOptions options) : base(options)
        {
            
        }
    }
}
