using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace casino_testapp.Controllers
{
    public class ProfileController : Controller
    {
        // GET: Profile
        public ActionResult Account()
        {
            return View();
        }
    }
}