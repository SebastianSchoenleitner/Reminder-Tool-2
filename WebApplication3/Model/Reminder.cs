namespace WebApplication3.Model
{
    public class Reminder
    {
        public int Id { get; set; }
        public String title { get; set; }
        public String description { get; set; }
        public DateTime date { get; set; }
        public bool multipleTimes { get; set; }
        public char intervall { get; set; }
        public bool e_Mail { get; set; }
        public bool teams_DM { get; set; }
        public bool teams_ChannelM { get; set; }
        public bool calender_entry { get; set; }
        public bool jira_ticket { get; set; }

    }
}
