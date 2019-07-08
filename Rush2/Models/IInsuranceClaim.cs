using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rush2.Models
{
    public interface IInsuranceClaim
    {
        decimal CalculateCost(Damage damage);
        string GetVehicleColor();
    }
}
