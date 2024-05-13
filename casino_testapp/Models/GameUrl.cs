using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace casino_testapp.Models
{

    public class GameUrlDatum
    {
        public string errCode { get; set; }
        public VendorsData data { get; set; }
    }
    public class GameUrl
    {
    
            public string code { get; set; }
            public string clientIP { get; set; }
        
    }
}