using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace casino_testapp.Models
{
    public class GamesData
    {
        public string errCode { get; set; }
        public GamesDatum data { get; set; }
    }

    public class GamesDatum
    {
        public string traceId { get; set; }
        public string status { get; set; }
        public string message { get; set; }
        public Datum data { get; set; }

    }

    public class Datum
    {
        public Headers headers { get; set; }
        public List<List<string>> games { get; set; }
        public int currentPage { get; set; }
        public int totalItems { get; set; }
        public int totalPages { get; set; }
    }

    public class Headers
    {
        public int gameCode { get; set; }
        public int gameName { get; set; }
        public int categoryCode { get; set; }
        public int imageSquare { get; set; }
        public int imageLandscape { get; set; }
        public int languageCode { get; set; }
        public int platformCode { get; set; }
        public int currencyCode { get; set; }
    }

    public class GameStrings
    {
        public List<string> games { get; set; }
    }
    public class Game
    {
        public string gameCode { get; set; }
        public string gameName { get; set; }
        public string gameType { get; set; }
        public string gameCover { get; set; }
        public string gameNull { get; set; }
        public string language { get; set; }
        public string platform { get; set; }
        public string currency { get; set; }
    }
}