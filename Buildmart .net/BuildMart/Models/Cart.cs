using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class Cart
{
    public int Id { get; set; }

    public int? Quantity { get; set; }

    public int? UserId { get; set; }

    public int? VendorProductId { get; set; }

    public virtual User? User { get; set; }

    public virtual VendorProduct? VendorProduct { get; set; }
}
