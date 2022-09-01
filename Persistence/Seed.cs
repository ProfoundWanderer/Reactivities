using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Past Activity 1",
                    StartDateTime = DateTime.Now.AddMonths(-2),
                    EndDateTime = DateTime.Now.AddMonths(-2),
                    Description = "Activity 2 months ago",
                    Category = "drinks",
                    Address = "London",
                },
                new Activity
                {
                    Title = "Past Activity 2",
                    StartDateTime = DateTime.Now.AddMonths(-1),
                    EndDateTime = DateTime.Now.AddMonths(-1),
                    Description = "Activity 1 month ago",
                    Category = "culture",
                    Address = "Paris",
                },
                new Activity
                {
                    Title = "Future Activity 1",
                    StartDateTime = DateTime.Now.AddMonths(1),
                    EndDateTime = DateTime.Now.AddMonths(1),
                    Description = "Activity 1 month in future",
                    Category = "culture",
                    Address = "London",
                },
                new Activity
                {
                    Title = "Future Activity 2",
                    StartDateTime = DateTime.Now.AddMonths(2),
                    EndDateTime = DateTime.Now.AddMonths(2),
                    Description = "Activity 2 months in future",
                    Category = "music",
                    Address = "London",
                },
                new Activity
                {
                    Title = "Future Activity 3",
                    StartDateTime = DateTime.Now.AddMonths(3),
                    EndDateTime = DateTime.Now.AddMonths(3),
                    Description = "Activity 3 months in future",
                    Category = "drinks",
                    Address = "London",
                },
                new Activity
                {
                    Title = "Future Activity 4",
                    StartDateTime = DateTime.Now.AddMonths(4),
                    EndDateTime = DateTime.Now.AddMonths(4),
                    Description = "Activity 4 months in future",
                    Category = "drinks",
                    Address = "London",
                },
                new Activity
                {
                    Title = "Future Activity 5",
                    StartDateTime = DateTime.Now.AddMonths(5),
                    EndDateTime = DateTime.Now.AddMonths(5),
                    Description = "Activity 5 months in future",
                    Category = "drinks",
                    Address = "London",
                },
                new Activity
                {
                    Title = "Future Activity 6",
                    StartDateTime = DateTime.Now.AddMonths(6),
                    EndDateTime = DateTime.Now.AddMonths(6),
                    Description = "Activity 6 months in future",
                    Category = "music",
                    Address = "London",
                },
                new Activity
                {
                    Title = "Future Activity 7",
                    StartDateTime = DateTime.Now.AddMonths(7),
                    EndDateTime = DateTime.Now.AddMonths(7),
                    Description = "Activity 2 months ago",
                    Category = "travel",
                    Address = "London",
                },
                new Activity
                {
                    Title = "Future Activity 8",
                    StartDateTime = DateTime.Now.AddMonths(8),
                    EndDateTime = DateTime.Now.AddMonths(8),
                    Description = "Activity 8 months in future",
                    Category = "film",
                    Address = "London",
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}