using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using webapi.DataModels;

namespace webapi.Context
{
	public class MainPortfolioContext : DbContext
	{		
		public MainPortfolioContext(DbContextOptions<MainPortfolioContext> options)
			: base(options)
		{
		}
		
		public DbSet<MainPortfolio> MainPortfolio { get; set; }
	}
}