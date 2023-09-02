using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class Labour
{
    public int Id { get; set; }

    public string? ContactNumber { get; set; }

    public string? Email { get; set; }

    public int? Experience { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public double? Rates { get; set; }

    public string? Status { get; set; }

    public int? Uid { get; set; }

    public virtual User? UidNavigation { get; set; }
}
