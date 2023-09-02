using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class MembershipPayment
{
    public int Id { get; set; }

    public double? Amount { get; set; }

    public DateOnly? ExpiryDate { get; set; }

    public DateOnly? PurchaseDate { get; set; }

    public string? TransactionId { get; set; }

    public int? PlanId { get; set; }

    public int? VendorId { get; set; }

    public virtual Plan? Plan { get; set; }

    public virtual ConstructionMaterialVendor? Vendor { get; set; }
}
