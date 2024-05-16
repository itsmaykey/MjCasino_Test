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

        public ActionResult Sports()
        {
            return View();
        }
        public ActionResult Fish()
        {
            return View();
        }
        public ActionResult Poker()
        {
            return View();
        }
        public ActionResult Live()
        {
            return View();
        }
        public ActionResult MiniGames()
        {
            return View();
        }

        public ActionResult OpenGame()
        {
            return View();
        }
    }
    
    
}