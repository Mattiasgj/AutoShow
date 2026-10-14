using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoShow.Api.Models;

namespace AutoShow.Api.DTOs
{
	public class CreateListingDto
	{
		public string Make { get; set; } = string.Empty;
		public string Model { get; set; } = string.Empty;
		public int Year { get; set; }
		public decimal Price { get; set; }
		public int Mileage { get; set; }
		public string FuelType { get; set; } = string.Empty;
		public string Transmission { get; set; } = string.Empty;
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; } = string.Empty;
		public List<string> Images { get; set; } = new();
		public DateTime CreatedAt { get; set; }
	}
}