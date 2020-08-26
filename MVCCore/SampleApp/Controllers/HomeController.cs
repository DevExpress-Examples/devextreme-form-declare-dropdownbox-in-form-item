using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using SampleApp.Models;

namespace SampleApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            Employee e = new Employee()
            {
                Owner = "John Heart",
                Status = 1
            };

            return View(e);
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View();
        }
    }
}
