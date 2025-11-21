using System.ComponentModel.DataAnnotations;

namespace ASP.NET_Core.Models;

public class Employee {
    [Required]
    public string Owner { get; set; }
    [Required(ErrorMessage = "Status is required")]
    public int Status { get; set; }
}
