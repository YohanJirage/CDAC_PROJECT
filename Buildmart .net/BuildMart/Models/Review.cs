using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class Review
{
    public int Id { get; set; }

    public string? Description { get; set; }

    public int? Rating { get; set; }

    public int? UserId { get; set; }

    public int? VendorId { get; set; }

    public virtual User? User { get; set; }

    public virtual ConstructionMaterialVendor? Vendor { get; set; }
}
