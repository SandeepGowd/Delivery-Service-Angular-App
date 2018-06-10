using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace DeliveryServiceApp.Models
{
    public class Order
    {
        [Key]
        public int orderId { get; set; }
        public int distance { get; set; }
        public int stair { get; set; }
        public string customerType { get; set; }
        public string orderBy { get; set; }

        public decimal orderCost { get; set; }
    }
}