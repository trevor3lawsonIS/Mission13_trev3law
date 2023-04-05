using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission14_trev3law.Data;

namespace Mission14_trev3law.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray();
            return (x);
        }
    }
}
