using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoShow.Api.Models
{
	public class ListingImage
	{
		public int Id { get; set; }
		public int ListingId { get; set; }
		public string ImageUrl { get; set; } = string.Empty;
	}
}