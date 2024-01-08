using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication3.Migrations
{
    public partial class AllNecessaryParameter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Reminders",
                newName: "title");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Reminders",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Reminders",
                newName: "date");

            migrationBuilder.AddColumn<bool>(
                name: "calender_entry",
                table: "Reminders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "e_Mail",
                table: "Reminders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "intervall",
                table: "Reminders",
                type: "nvarchar(1)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "jira_ticket",
                table: "Reminders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "multipleTimes",
                table: "Reminders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "teams_ChannelM",
                table: "Reminders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "teams_DM",
                table: "Reminders",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "calender_entry",
                table: "Reminders");

            migrationBuilder.DropColumn(
                name: "e_Mail",
                table: "Reminders");

            migrationBuilder.DropColumn(
                name: "intervall",
                table: "Reminders");

            migrationBuilder.DropColumn(
                name: "jira_ticket",
                table: "Reminders");

            migrationBuilder.DropColumn(
                name: "multipleTimes",
                table: "Reminders");

            migrationBuilder.DropColumn(
                name: "teams_ChannelM",
                table: "Reminders");

            migrationBuilder.DropColumn(
                name: "teams_DM",
                table: "Reminders");

            migrationBuilder.RenameColumn(
                name: "title",
                table: "Reminders",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Reminders",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "date",
                table: "Reminders",
                newName: "Date");
        }
    }
}
