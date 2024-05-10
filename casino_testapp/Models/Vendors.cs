using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace casino_testapp.Models
{
    public class VendorsDatum
    {
        public string errCode { get; set; }
        public VendorsData data { get; set; }
    }

    public class VendorsData
    {
        public string traceId { get; set; }
        public string status { get; set; }
        public string message { get; set; }
        public List<Vendor> data { get; set; }

    }
    public class Vendor
    {
        public string name { get; set; }
        public string currencyCode { get; set; }
        public string code { get; set; }
        public string categoryCode { get; set; }
    }
}