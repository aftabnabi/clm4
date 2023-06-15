using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrderController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/orders
        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetOrders()
        {
            var orders = _context.Order.Select(o => new Order
            {
                Id = o.Id,
CustomerId = o.CustomerId,
EmployeeId = o.EmployeeId,
OrderDate = o.OrderDate,
RequiredDate = o.RequiredDate,
ShippedDate = o.ShippedDate,
ShipVia = o.ShipVia,
Freight = o.Freight,
ShipName = o.ShipName,
ShipAddress = o.ShipAddress,
ShipCity = o.ShipCity,
ShipRegion = o.ShipRegion,
ShipPostalCode = o.ShipPostalCode,
ShipCountry = o.ShipCountry
            }).ToList();

            return orders;
        }
        // GET: api/orders/{id}
        [HttpGet("{id}")]
        public ActionResult<Order> GetOrder(int id)
        {
            var o = _context.Order.FirstOrDefault(o => o.Id == id);

            if (o == null)
            {
                return NotFound();
            }

            var orderDto = new Order
            {
                Id = o.Id,
                CustomerId = o.CustomerId,
                EmployeeId = o.EmployeeId,
                OrderDate = o.OrderDate,
                RequiredDate = o.RequiredDate,
                ShippedDate = o.ShippedDate,
                ShipVia = o.ShipVia,
                Freight = o.Freight,
                ShipName = o.ShipName,
                ShipAddress = o.ShipAddress,
                ShipCity = o.ShipCity,
                ShipRegion = o.ShipRegion,
                ShipPostalCode = o.ShipPostalCode,
                ShipCountry = o.ShipCountry
            };

            return orderDto;
        }
        // POST: api/orders
        [HttpPost]
        public ActionResult<Order> CreateOrder(Order o)
        {
            var orderDto = new webapi.Models.Order
            {
                Id = o.Id,
                CustomerId = o.CustomerId,
                EmployeeId = o.EmployeeId,
                OrderDate = o.OrderDate,
                RequiredDate = o.RequiredDate,
                ShippedDate = o.ShippedDate,
                ShipVia = o.ShipVia,
                Freight = o.Freight,
                ShipName = o.ShipName,
                ShipAddress = o.ShipAddress,
                ShipCity = o.ShipCity,
                ShipRegion = o.ShipRegion,
                ShipPostalCode = o.ShipPostalCode,
                ShipCountry = o.ShipCountry
            };

            _context.Order.Add(orderDto);
            _context.SaveChanges(); // Save changes to the database

            return CreatedAtAction(nameof(GetOrder), new { id = o.Id }, o);
        }

        // PUT: api/orders/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, Order o)
        {
            //if (id != order.Id)
            //{
            //    return BadRequest(); // Return 400 Bad Request if the provided ID does not match the order ID
            //}
            var orderDto = new webapi.Models.Order
            {
                Id = o.Id,
                CustomerId = o.CustomerId,
                EmployeeId = o.EmployeeId,
                OrderDate = o.OrderDate,
                RequiredDate = o.RequiredDate,
                ShippedDate = o.ShippedDate,
                ShipVia = o.ShipVia,
                Freight = o.Freight,
                ShipName = o.ShipName,
                ShipAddress = o.ShipAddress,
                ShipCity = o.ShipCity,
                ShipRegion = o.ShipRegion,
                ShipPostalCode = o.ShipPostalCode,
                ShipCountry = o.ShipCountry
            };
            _context.Entry(orderDto).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/orders/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var order = _context.Order.FirstOrDefault(o => o.Id == id);

            if (order == null)
            {
                return NotFound(); // Return 404 Not Found if the order is not found
            }

            _context.Order.Remove(order);
            _context.SaveChanges();

            return NoContent();
        }

    }
}
