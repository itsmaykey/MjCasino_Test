using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace casino_testapp.Models
{
  
        // GET: TransferUtility
   public class TransferUtility {
       private readonly string auth;
       private readonly string id;
       private readonly string key;
       private readonly string username;
       private readonly string network;
       private readonly string tag;
       private readonly string transfer_to_network;
       private readonly string transfer_to_id;
       private readonly string transfer_to_username;
       private readonly string transfer_to_tag;
       private readonly string transfer_to_referrer;
       private readonly string transfer_to_amount;
    
      

       public TransferUtility
           (
           string auth, string id, string key, string username, string network, string tag,
           string transfer_to_network, string transfer_to_id, string transfer_to_username, string transfer_to_tag, string transfer_to_referrer,  string transfer_to_amount)
   {
            this.auth = auth;
            this.id = id;
            this.key = key;
            this.username = username;
            this.network = network;
            this.tag = tag;
            this.transfer_to_network = transfer_to_network;
            this.transfer_to_id = transfer_to_id;
            this.transfer_to_username = transfer_to_username;
            this.transfer_to_tag = transfer_to_tag;
            this.transfer_to_referrer = transfer_to_referrer;
            this.transfer_to_amount = transfer_to_amount;
   }


       public Dictionary<string, string> postTransferKey()
       {
           return new Dictionary<string, string> {
                { "auth", this.auth },
                { "id", this.id },
                { "key", this.key },
                { "username", this.username },
                { "network", this.network },
                { "tag", this.tag },
                { "transfer_to_network", this.transfer_to_network },
                { "transfer_to_id", this.transfer_to_id },
                { "transfer_to_username", this.transfer_to_username },
                { "transfer_to_tag", this.transfer_to_tag },
                { "transfer_to_referrer", this.transfer_to_referrer },
                { "transfer_to_amount", this.transfer_to_amount },
               
            };
       }

    }

    public class TransferResponse {
        public int errCode {get;set;}
    }
}