using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoShow.Api.Data;
using AutoShow.Api.Interfaces;
using AutoShow.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace AutoShow.Api.Repositories
{
	public class ListingsRepository : IListingsRepository
	{
		private readonly ApplicationDBContext _context;
		public ListingsRepository(ApplicationDBContext context)
		{
			_context = context;
		}
		public Task<List<Listing>> GetTenListingsAsync()
		{
			var listings = _context.Listings.OrderBy(listing => listing.Id).Take(10).ToListAsync();

			return listings;
		}
	}
}