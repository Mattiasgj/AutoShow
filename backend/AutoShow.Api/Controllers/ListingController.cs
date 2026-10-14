using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoShow.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using AutoShow.Api.Mappers;
using AutoShow.Api.DTOs;

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

		[HttpGet]
		[Route("{id}")]
		public async Task<IActionResult> GetListingById(int id)
		{
			var listing = await _listingRepo.GetListingByIdAsync(id);
			if (listing == null)
			{
				return NotFound();
			}
			var listingDto = listing.ToGetListingDto();
			return Ok(listingDto);
		}

		[HttpPost]
		public async Task<IActionResult> CreateListing([FromBody] CreateListingDto createListingDto)
		{
			var listingModel = createListingDto.ToListingFromCreateDto();
			var createdListing = await _listingRepo.CreateListingAsync(listingModel);
			var createdListingDto = createdListing.ToGetListingDto();
			return CreatedAtAction(nameof(GetTenListings), new { id = createdListing.Id }, createdListingDto);
		}

		[HttpDelete]
		[Route("{id}")]
		public async Task<IActionResult> DeleteListingById(int id)
		{
			var listing = await _listingRepo.DeleteListingByIdAsync(id);
			if (listing == null)
			{
				return NotFound();
			}
			return Ok(listing.ToGetListingDto());
		}
	}
}