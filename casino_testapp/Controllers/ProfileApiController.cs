using casino_testapp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace casino_testapp.Controllers
{
    [RoutePrefix("api/user")]
    public class ProfileApiController : ApiController
    {
        // GET: ProfileApi
        [HttpPost]
        [Route("GetTransactionHistory")]
        public async Task<IHttpActionResult> GetTransactionHistory(string auth, string id, string key)
        {
            var getbase = new GameUtility();
            var getData = new UserUtility(auth, id, key);
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync
                    (
                    getbase.getBaseUrl("/transaction/get/history/all"),
                    new FormUrlEncodedContent(
                        getData.getUserKey()
                        ));
                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<UserTransactionResponse>(responseJsonString);

                
                return Ok(objDeserialized);
            }
            catch (Exception)
            {

                throw;
            }
        }


        [HttpPost]
        [Route("GetBalance")]
        public async Task<IHttpActionResult> GetBalance(string auth, string id, string key)
        {
            var getbase = new GameUtility();
            var getData = new UserUtility(auth, id, key);
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync
                    (
                    getbase.getBaseUrl("/transaction/get/balance"),
                    new FormUrlEncodedContent(
                     getData.getUserKey()
                        )
                        );
               
                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<userBalanceResponse>(responseJsonString);


                return Ok(objDeserialized);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost]
        [Route("GetDownlines")]
        public async Task<IHttpActionResult> GetDownlines(string auth, string id, string key)
        {
            var getbase = new GameUtility();
            var getData = new UserUtility(auth, id, key);
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync
                    (
                    getbase.getBaseUrl("/register/get/agent/downlines"),
                    new FormUrlEncodedContent(
                     getData.getUserKey()
                        )
                        );

                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<userDownLinesResponse>(responseJsonString);
                return Ok(objDeserialized);
               
            }
            catch (Exception)
            {

                throw;
            }
        }


        [HttpPost]
        [Route("PostTransfer")]
        public async Task<IHttpActionResult> PostTransfer(
            string auth, string id, string key, string username, string network, string tag,
           string transfer_to_network, string transfer_to_id, string transfer_to_username, string transfer_to_tag, string transfer_to_referrer,  string transfer_to_amount)
        {
            var getbase = new GameUtility();
            var getData = new TransferUtility(auth, id, key, username, network, tag,
                                               transfer_to_network, transfer_to_id, transfer_to_username, transfer_to_tag, transfer_to_referrer, transfer_to_amount);
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync
                    (
                    getbase.getBaseUrl("/transaction/transfer/balance"),
                    new FormUrlEncodedContent(
                        getData.postTransferKey()
                        )
                    );
                
                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<TransferResponse>(responseJsonString);
                if (objDeserialized.errCode >= 1)
                {
                    return Ok(new
                    {
                          icon = "error",
                          title = "Invalid Response!",
                          text = "Please Contact the Provider",
                    });
                }
                else
                {
                    return Ok(new
                    {
                         icon ="success",
                         title = "Insufficient Balance!",
                         text = "Please add fund first",
                    });
                }
 
            }
            catch
            {

                throw;
            }
        }
    }
}