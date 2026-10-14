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

		public async Task<Listing> CreateListingAsync(Listing listing)
		{
			await _context.Listings.AddAsync(listing);
			await _context.SaveChangesAsync();
			return listing;
		}

		public async Task<Listing?> DeleteListingByIdAsync(int id)
		{
			var listing = await _context.Listings.FindAsync(id);
			if (listing == null)
			{
				return null;
			}

			_context.Listings.Remove(listing);
			await _context.SaveChangesAsync();
			return listing;
		}

		public async Task<Listing?> GetListingByIdAsync(int id)
		{
			return await _context.Listings.FindAsync(id);
		}

		public async Task<List<Listing>> GetTenListingsAsync()
		{
			var listings = await _context.Listings.Include(l => l.Images).OrderBy(listing => listing.Id).Take(10).ToListAsync();

			return listings;
		}
	}
}