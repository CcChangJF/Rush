using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Rush2.Models;

namespace Rush2.Controllers
{
    public class ClaimController : Controller
    {
        /// <summary>
        /// The two private property should use dependency Injection
        /// Here for simple, just initialize it here
        /// </summary>
        private InsuranceClaimEntities db;
        private IInsuranceClaim service;
        public ClaimController()
        {
            db = new InsuranceClaimEntities();
            service = new InsuranceClaim(db);
        }

        // GET: Claim
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Create a new damage claim
        /// </summary>
        /// <param name="damage"></param>
        /// <returns></returns>
        [HttpPost]
        public string Create(FormCollection damage)
        {
            Damage newDamage = new Damage
            {
                VehicleId = damage["vehicle"],
                DamagePart = damage["damagePart"],
                Severity = damage["severity"],
                Photo = ""
            };
            newDamage.Cost = service.CalculateCost(newDamage);
            db.Damage.Add(newDamage);
            db.SaveChanges();
            return "OK";
        }
    }

}