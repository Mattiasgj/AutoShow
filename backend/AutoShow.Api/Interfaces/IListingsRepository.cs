using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoShow.Api.Models;

namespace AutoShow.Api.Interfaces
{
	public interface IListingsRepository
	{
		Task<List<Listing>> GetTenListingsAsync();
	}
}