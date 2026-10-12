using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoShow.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using AutoShow.Api.Mappers;

namespace AutoShow.Api.Controllers
{
	[ApiController]
	[Route("api/listings")]
	public class ListingController : ControllerBase
	{
		private readonly IListingsRepository _listingRepo;

		public ListingController(IListingsRepository listingsRepo)
		{
			_listingRepo = listingsRepo;
		}

		[HttpGet]
		public async Task<IActionResult> GetTenListings()
		{
			var listings = await _listingRepo.GetTenListingsAsync();
			var listingsDto = listings.Select(s => s.ToGetListingDto());
			return Ok(listingsDto);
		}
	}
}