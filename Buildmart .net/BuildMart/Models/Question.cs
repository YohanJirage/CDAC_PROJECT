using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class Question
{
    public int Id { get; set; }

    public string? Question1 { get; set; }

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
