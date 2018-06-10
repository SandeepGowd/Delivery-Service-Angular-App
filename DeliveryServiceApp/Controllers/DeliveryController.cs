using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DeliveryServiceApp.Models;

namespace DeliveryServiceApp.Controllers
{
    public class DeliveryController : ApiController
    {
        DeliveryServiceContext DeliveryDbContext=new DeliveryServiceContext();
        
        // GET api/<controller>
        [Route("GetDistanceCost/{distance:int}")]
        public IHttpActionResult GetDistanceCost(int distance)
        {
            float totalCost = 0;
            if (distance==0)
            {
                return NotFound();
            }
            if (distance>0 && distance < 10)
            {
                totalCost = 1098.9F;
            }
            else if (distance < 50 && distance > 10)
            {
                totalCost = 1248.75F;
            }
            else
            {
                totalCost = distance * 0.25F;
            }
            return Ok(totalCost);
        }

        [Route("GetStairCharges/{stair:int}")]
        public IHttpActionResult GetStairCharges(int stair)
        {
            float stairCost = 0;
            if (stair == 0)
            {
                stairCost = 999F;
            }
            else if (stair > 1 && stair < 5)
            {
                stairCost = 1048.95F;
            }
            else if (stair == 7)
            {
                stairCost = 1052.95F;
            }
            else if (stair == 11)
            {
                stairCost = 1060.95F;
            }
            return Ok(stairCost);
        }

        [Route("GetChargeByCustomer/{customerType}")]
        public IHttpActionResult GetChargeByCustomer(string customerType)
        {
            float chargeByCustomer = 0;
            if (customerType==null)
            {
                return NotFound();
            }
            if (customerType == "New")
            {
                chargeByCustomer = 849.15F;
            }
            else if (customerType == "Old")
            {
                chargeByCustomer = 899.1F;
            }
            return Ok(chargeByCustomer);
        }

        [Route("GetChargeByCoupon/{coupon}")]
        public IHttpActionResult GetChargeByCoupon(string coupon)
        {
            if (coupon==null)
            {
                return NotFound();
            }
            return Ok(799.2F);
        }

        [Route("GetWeekendCharges")]
        public IHttpActionResult GetWeekendCharges()
        {
            return Ok(1248.75F);
        }

        [Route("SaveDelivery")]
        public IHttpActionResult SaveDelivery(Order orderDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            DeliveryDbContext.OrderDetails.Add(orderDetails);
            DeliveryDbContext.SaveChanges();
            return CreatedAtRoute("DefaultApi", new
            {
                id = orderDetails.orderId
            }, orderDetails);
        }

       
    }
}
