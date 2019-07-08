//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Rush2.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Damage
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Damage()
        {
            this.ClaimDamage = new HashSet<ClaimDamage>();
        }
    
        public int Id { get; set; }
        public string VehicleId { get; set; }
        public string DamagePart { get; set; }
        public string Severity { get; set; }
        public string Photo { get; set; }
        public Nullable<decimal> Cost { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ClaimDamage> ClaimDamage { get; set; }
        public virtual Vehicle Vehicle { get; set; }
    }
}
