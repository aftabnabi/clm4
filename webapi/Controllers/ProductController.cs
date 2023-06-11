using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/products
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            var products = _context.Product.Select(p => new Product
            {
                Id = p.Id,
                Name = p.Name,
                UnitPrice = p.UnitPrice,
                Description = p.Description
            }).ToList();

            return products;
        }
        // GET: api/products/{id}
        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = _context.Product.FirstOrDefault(p => p.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            var productDto = new Product
            {
                Id = product.Id,
                Name = product.Name,
                UnitPrice = product.UnitPrice,
                Description = product.Description
            };

            return productDto;
        }
        // POST: api/products
        [HttpPost]
        public ActionResult<Product> CreateProduct(Product product)
        {
            var productDto = new webapi.Models.Product
            {
                Id = product.Id,
                Name = product.Name,
                UnitPrice = product.UnitPrice,
                Description = product.Description
            };

            _context.Product.Add(productDto);
            _context.SaveChanges(); // Save changes to the database

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        // PUT: api/products/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product product)
        {
            //if (id != product.Id)
            //{
            //    return BadRequest(); // Return 400 Bad Request if the provided ID does not match the product ID
            //}
            var productDto = new webapi.Models.Product
            {
                Id = id,
                Name = product.Name,
                UnitPrice = product.UnitPrice,
                Description = product.Description
            };
            _context.Entry(productDto).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/products/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Product.FirstOrDefault(p => p.Id == id);

            if (product == null)
            {
                return NotFound(); // Return 404 Not Found if the product is not found
            }

            _context.Product.Remove(product);
            _context.SaveChanges();

            return NoContent();
        }

    }
}
