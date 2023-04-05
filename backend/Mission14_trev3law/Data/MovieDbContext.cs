using Microsoft.EntityFrameworkCore;

namespace Mission14_trev3law.Data
{
    public class MovieDbContext: DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }
        public DbSet<Movie> Movies { get; set; }
    }
}
