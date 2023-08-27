using System;
using System.Collections.Generic;

namespace BuildMart.Models;

public partial class Order
{
    public int Id { get; set; }

    public double? FinalPaymentAmount { get; set; }

    public DateOnly? FinalPaymentDate { get; set; }

    public string? FinalPaymentMode { get; set; }

    public string? FinalPaymentTransactionId { get; set; }

    public double? InitialPaymentAmount { get; set; }

    public DateOnly? InitialPaymentDate { get; set; }

    public string? InitialPaymentMode { get; set; }

    public string? InitialPaymentTransactionId { get; set; }

    public DateOnly? OrderDate { get; set; }

    public double? TotalPrice { get; set; }

    public int? AddressId { get; set; }

    public int? StatusId { get; set; }

    public int? UserId { get; set; }

    public virtual Address? Address { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual OrderStatus? Status { get; set; }

    public virtual User? User { get; set; }
}
