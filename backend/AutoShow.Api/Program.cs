using AutoShow.Api.Data;
using Microsoft.EntityFrameworkCore;
using AutoShow.Api.Interfaces;
using AutoShow.Api.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApiDocument();

builder.Services.AddScoped<IListingsRepository, ListingsRepository>();

builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
	options.UseSqlServer(
		builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
	app.UseOpenApi();
	app.UseSwaggerUi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();