using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;



var builder = WebApplication.CreateBuilder(args);
// Configure the DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite("Data Source=Data\\productsdb.db");
});
// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseCors();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();


app.Run();

