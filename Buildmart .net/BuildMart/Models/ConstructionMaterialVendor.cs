using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class ConstructionMaterialVendor
{
    public int Id { get; set; }

    public string? ContactNumber { get; set; }

    public string? Email { get; set; }

    public string? ShopName { get; set; }

    public int? Uid { get; set; }

    public virtual ICollection<MembershipPayment> MembershipPayments { get; set; } = new List<MembershipPayment>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual User? UidNavigation { get; set; }

    public virtual ICollection<VendorProduct> VendorProducts { get; set; } = new List<VendorProduct>();
}
