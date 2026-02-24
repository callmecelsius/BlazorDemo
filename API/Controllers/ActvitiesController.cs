using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
	[ApiController]
	public class ActvitiesController(AppDbContext context) : BaseApiController
	{
		[HttpGet]
		public async Task<ActionResult<List<Activity>>> GetActivities()
		{
			return await context.Activities.ToListAsync();
		}
	}
}
