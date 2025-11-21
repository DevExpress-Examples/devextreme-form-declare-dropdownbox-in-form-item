using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core.Controllers;
public class HomeController: Controller {
    public IActionResult Index() {
        Employee employee = new Employee() {
            Owner = "John Heart",
            Status = 1
        };
        return View(employee);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error() {
        return View();
    }
}
