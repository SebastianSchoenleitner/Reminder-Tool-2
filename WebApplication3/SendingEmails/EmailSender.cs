using System.Net;
using System.Net.Mail;

namespace WebApplication3.SendingEmails
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            var mail = "ReminderBot@outlook.de"; //Bot E-Mail 
            var pw = "BotReminder"; //Bot Passwort

            var client = new SmtpClient("smtp-mail.outlook.com", 587)
            { 
                EnableSsl = true,
                Credentials = new NetworkCredential(mail, pw)
            };

            return client.SendMailAsync(
                new MailMessage(from: mail,
                                to: email,
                                subject,
                                message
                                ));
            
        }
    }
}
