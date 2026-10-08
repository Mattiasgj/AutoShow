using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoShow.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace AutoShow.Api.Data
{
	public class ApplicationDBContext : DbContext
	{
		public ApplicationDBContext(DbContextOptions dbContextOptions)
		: base(dbContextOptions)
		{

		}

		public DbSet<User> Users { get; set; }
		public DbSet<Listing> Listings { get; set; }
		public DbSet<ListingImage> ListingImages { get; set; }
	}
}