using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class OrderItem
{
    public int Id { get; set; }

    public int? Quantity { get; set; }

    public int? OrderId { get; set; }

    public int? VendorProductId { get; set; }

    public virtual Order? Order { get; set; }

    public virtual VendorProduct? VendorProduct { get; set; }
}
