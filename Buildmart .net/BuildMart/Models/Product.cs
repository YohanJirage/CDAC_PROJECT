using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? Description { get; set; }

    public byte[]? Picture { get; set; }

    public string? ProductName { get; set; }

    public string? StockQuantity { get; set; }

    public int? Cid { get; set; }

    public virtual Category? CidNavigation { get; set; }

    public virtual ICollection<VendorProduct> VendorProducts { get; set; } = new List<VendorProduct>();
}
