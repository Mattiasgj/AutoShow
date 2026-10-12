using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoShow.Api.DTOs;
using AutoShow.Api.Models;

namespace AutoShow.Api.Mappers
{
	public static class ListingMapper
	{
		public static GetListingDto ToGetListingDto(this Listing listingModel)
		{
			return new GetListingDto
			{
				Id = listingModel.Id,
				Make = listingModel.Make,
				Model = listingModel.Model,
				Year = listingModel.Year,
				Price = listingModel.Price,
				Mileage = listingModel.Mileage,
				FuelType = listingModel.FuelType,
				Transmission = listingModel.Transmission,
				Title = listingModel.Title,
				Description = listingModel.Description,
				CreatedAt = listingModel.CreatedAt
			};
		}

		public static Listing ToCreateListingDto(this CreateListingDto listingModel)
		{
			return new Listing
			{
				Make = listingModel.Make,
				Model = listingModel.Model,
				Year = listingModel.Year,
				Price = listingModel.Price,
				Mileage = listingModel.Mileage,
				FuelType = listingModel.FuelType,
				Transmission = listingModel.Transmission,
				Title = listingModel.Title,
				Description = listingModel.Description,
				CreatedAt = listingModel.CreatedAt
			};
		}
	}
}