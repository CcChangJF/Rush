using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Rush2.Models;

namespace Rush2
{
    public class InsuranceClaim : IInsuranceClaim
    {
        private InsuranceClaimEntities db;
        public InsuranceClaim(InsuranceClaimEntities _db)
        {
            db = _db;
        }

        /// <summary>
        /// Estimate the cost
        /// Strategy: average the cost of those with
        /// same damage part & severity.
        /// </summary>
        /// <returns>cost, decimal</returns>
        public decimal CalculateCost(Damage damage)
        {
            var similarDamages = db.Damage.Where(
                x => (x.Severity == damage.Severity &&
                x.DamagePart == damage.DamagePart)).ToList();

            decimal cost = 0;
            int similarDamagesCount = 0;
            foreach(var item in similarDamages)
            {
                if (null != item.Cost)
                {
                    ++similarDamagesCount;
                    cost += (decimal)item.Cost;
                }
            }
            return cost / similarDamagesCount;
        }


        public string GetVehicleColor()
        {
            return "red";
        }
    }
}