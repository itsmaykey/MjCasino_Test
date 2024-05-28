using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace casino_testapp.Models
{
   public class UserUtility {
       private readonly string auth;
       private readonly string id;
       private readonly string key;
        public UserUtility(string auth, string id, string key)
        {
            this.auth = auth;
            this.id = id;
            this.key = key;
        }

        public Dictionary<string, string> getUserKey()
        {

            return new Dictionary<string, string> {
                { "auth", this.auth },
                { "id", this.id },
                 { "key", this.key }
            };
        }


     
   }
    public class userBalanceResponse {
         public int errCode { get; set; }
        public float balance { get; set; }
    }

    public class UserTransactionResponse
    {
        public int errCode { get; set; }
        public List<UserTransaction> history { get; set; }
    }
    public class UserTransaction
    {
        public int balance_count { get; set; }
        public string balance_network { get; set; }
        public string balance_id { get; set; }
        public string balance_referrer { get; set; }
        public string balance_tag { get; set; }
        public string balance_username { get; set; }
        public int balance_value { get; set; }
        public string balance_hash { get; set; }
        public string balance_description { get; set; }
        public string balance_destination { get; set; }
        public string balance_from { get; set; }
        public string balance_date { get; set; }
        public string balance_time { get; set; }

    }

    public class userDownLinesResponse
    {
        public int errCode { get; set; }

        public List<userDownLines> downlines {get; set;}
    }

    public class userDownLines {

        public int balance_sum { get; set; }
        public string balance_network { get; set; }
        public string balance_referrer { get; set; }
        public string balance_id { get; set; }
        public string balance_username { get; set; }
        public string balance_tag { get; set; }
        public string balance_status { get; set; }
        public string balance_created { get; set; }
    }


    public class userDownLinesData
    {

        public int balance_sum { get; set; }
        public string balance_network { get; set; }
        public string balance_referrer { get; set; }
        public string balance_id { get; set; }
        public string balance_username { get; set; }
        public string balance_tag { get; set; }
        public string balance_status { get; set; }
        public string balance_created { get; set; }
    }
    

  
    
}