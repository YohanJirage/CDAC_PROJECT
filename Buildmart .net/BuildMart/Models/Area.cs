using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class Area
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Pincode { get; set; }

    public int? CityId { get; set; }

    public virtual ICollection<Address> Addresses { get; set; } = new List<Address>();

    public virtual City? City { get; set; }
}
