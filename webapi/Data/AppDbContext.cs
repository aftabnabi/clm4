using Microsoft.EntityFrameworkCore;
using webapi.Models;

public class AppDbContext : DbContext
{
    public DbSet<Product> Product { get; set; } // Update DbSet property name
    public DbSet<Order> Order{ get; set; } // Update DbSet property name

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().ToTable("Products"); // Optionally specify table name explicitly
        modelBuilder.Entity<Order>().ToTable("Orders"); // Optionally specify table name explicitly
    }

    // ... Rest of the code ...
}
