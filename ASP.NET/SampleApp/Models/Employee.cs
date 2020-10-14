using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SampleApp.Models
{
    public class Employee
    {
        [Required]
        public string Owner { get; set; }
        [Required(ErrorMessage = "Status is required")]
        public int Status { get; set; }
    }
}
