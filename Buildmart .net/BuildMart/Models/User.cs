using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class User
{
    public int Id { get; set; }

    public string? ActiveStatus { get; set; }

    public string? Answer { get; set; }

    public string? Password { get; set; }

    public string? Username { get; set; }

    public int? QuestionId { get; set; }

    public int? RoleId { get; set; }

    public User(int? roleId)
    {
        RoleId = roleId;
    }

    public User( string? answer, string? password, string? username, int? questionId, int? roleId)
    {
        Answer = answer;
        Password = password;
        Username = username;
        QuestionId = questionId;
        RoleId = roleId;
    }

    public User(string? password, string? username)
    {
        Password = password;
        Username = username;
    }

    public virtual ICollection<Address> Addresses { get; set; } = new List<Address>();

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual ICollection<ConstructionCompany> ConstructionCompanies { get; set; } = new List<ConstructionCompany>();

    public virtual ICollection<ConstructionMaterialVendor> ConstructionMaterialVendors { get; set; } = new List<ConstructionMaterialVendor>();

    public virtual ICollection<IndividualCustomer> IndividualCustomers { get; set; } = new List<IndividualCustomer>();

    public virtual ICollection<Labour> Labours { get; set; } = new List<Labour>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual Question? Question { get; set; }

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual Role? Role { get; set; }
}
