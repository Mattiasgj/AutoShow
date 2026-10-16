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

builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowReactApp", policy =>
	{
		policy
			.WithOrigins("http://localhost:5173")
			.AllowAnyHeader()
			.AllowAnyMethod();
	});
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
	app.UseOpenApi();
	app.UseSwaggerUi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();