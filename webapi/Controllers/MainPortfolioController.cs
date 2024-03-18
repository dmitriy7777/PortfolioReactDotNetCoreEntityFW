using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Context;
using webapi.DataModels;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class MainPortfolioController : ControllerBase
{
	private readonly MainPortfolioContext _context;
	private readonly ILogger<MainPortfolioController> _logger;

	public MainPortfolioController(MainPortfolioContext context, ILogger<MainPortfolioController> logger)
	{
		_context = context;
		_logger = logger;
	}

	[HttpGet(Name = "GetMainPortfolio")]
	public async Task<IEnumerable<MainPortfolio>> Get()
	{
		return await _context.MainPortfolio.ToListAsync();
	}
}
