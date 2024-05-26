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
    }
}