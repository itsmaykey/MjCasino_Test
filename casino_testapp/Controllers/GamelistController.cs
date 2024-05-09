using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace casino_testapp.Controllers
{
    public class GamelistController : Controller
    {
        // GET: Gamelist
        public ActionResult Slot()
        {
            return View();
        }
        public ActionResult Cockfight()
        {
            return View();
        }

        public ActionResult Ball()
        {
            return View();
        }
        public ActionResult Fish()
        {
            return View();
        }
        public ActionResult Card()
        {
            return View();
        }
        public ActionResult Crown()
        {
            return View();
        }
        public ActionResult Arcade()
        {
            return View();
        }
    }
    
    
}