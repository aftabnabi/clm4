using Microsoft.AspNetCore.Mvc;
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
                Price = p.Price,
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
                Price = product.Price,
                Description = product.Description
            };

            return productDto;
        }
    }
}
