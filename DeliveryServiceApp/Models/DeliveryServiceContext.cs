using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace DeliveryServiceApp.Models
{
    public class DeliveryServiceContext : DbContext
    {
        public DeliveryServiceContext() : base("name=DefaultConnection")
        {
        }
        public DbSet<Order> OrderDetails {get;set;}
    }
}