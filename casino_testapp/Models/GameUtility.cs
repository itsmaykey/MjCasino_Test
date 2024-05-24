using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace casino_testapp.Models
{
    public class GameUtility
    {
        public string AUTH = "NzXG9de5khdQn4iUYdXYqR5JOntnOPcy";
        public string ID = "oqlc6nyg";
        public string KEY = "c011d739dc3ff798f31ab07d07ad1e91";
        static string BASE_URL = "https://amethys888.net";

        public Dictionary<string, string> getKey()
        {

            return new Dictionary<string, string> {
                { "auth", AUTH },
                { "id", ID },
                { "key", KEY}
            };
        }

        public Dictionary<string, string> getKeyVendorGames(string code, string categoryCode)
        {
            return new Dictionary<string, string> {
                { "auth", AUTH },
                { "id", ID },
                { "key", KEY },
                { "code", code },
               
                { "categoryCode", categoryCode.ToString() }
            };
        }

        public Dictionary<string, string> getKeyVendorGameUrl(string code, string clientIP, string auth, string id, string key)
        {
            return new Dictionary<string, string> {
                { "auth", auth },
                { "id", id },
                { "key", key },
                { "game_code", code },
                { "client_ip", clientIP.ToString() }
            };
        }



        public string getBaseUrl(string endpoint)
        {
            return BASE_URL + endpoint;
        }
    }
}