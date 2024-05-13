using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace casino_testapp.Models
{

    public class GameUrl
    {
        public string errCode { get; set; }
        public GameUrlData data { get; set; }
    }

    public class GameUrlData
    {
        public string traceId { get; set; }
        public string status { get; set; }
        public string message { get; set; }
        public GameUrlDatum data { get; set; }

    }
    public class GameUrlDatum
    {
    
            public string gameUrl { get; set; }
            public string token { get; set; }
        
    }
}