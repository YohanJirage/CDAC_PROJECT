using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class ConstructionCompany
{
    public int Id { get; set; }

    public string? CompanyName { get; set; }

    public string? ContactNumber { get; set; }

    public string? Email { get; set; }

    public int? Uid { get; set; }

    public virtual User? UidNavigation { get; set; }
}
