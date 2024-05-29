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
            //       int ibj = objDeserialized.downlines.Count;
            //    // var sortedGames = objDeserialized.data.data.games.Contains(categoryCode);
            //    var Downlines = new List<userDownLinesData>();
            //    for (var i = 0; i < ibj; i++)
            //    {
            //        var userDownlines = new userDownLinesData();
            //        userDownlines.balance_created = objDeserialized.downlines[i].balance_created;
            //        userDownlines.balance_id = objDeserialized.downlines[i].balance_id;
            //        userDownlines.balance_network = objDeserialized.downlines[i].balance_network;
            //        userDownlines.balance_referrer = objDeserialized.downlines[i].balance_referrer;
            //        userDownlines.balance_status = objDeserialized.downlines[i].balance_status;
            //        userDownlines.balance_sum = objDeserialized.downlines[i].balance_sum;
            //        userDownlines.balance_tag = objDeserialized.downlines[i].balance_tag;
            //        userDownlines.balance_username = objDeserialized.downlines[i].balance_username;
            //          Downlines.Add(userDownlines);
            //}

                return Ok(objDeserialized);
               
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}