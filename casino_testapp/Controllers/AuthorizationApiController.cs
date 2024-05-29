using casino_testapp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;


namespace casino_testapp.Controllers
{

    [RoutePrefix("api/Authorization")]
    public class AuthorizationApiController : ApiController
    {
        [HttpPost]
        [Route("Login")]
        public async Task<IHttpActionResult> Login(string username, string password, string host)
        {
            
            var authUtility = new AuthUtility(username, password);
            var gameUtility = new GameUtility();
            var httpClient = new HttpClient();

            try
            {
                var response = await httpClient.PostAsync
                    (
                        gameUtility.getBaseUrl("/login/session"),
                        new FormUrlEncodedContent
                        (
                            authUtility.getAuth()
                        )
                    );

                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<SessionResponse>(responseJsonString);

                var validateResponse = await httpClient.PostAsync
                    (
                        gameUtility.getBaseUrl("/login/validate2"),
                        new FormUrlEncodedContent
                        (
                            authUtility.validate(objDeserialized.session, objDeserialized.key)
                        )
                    );

                var validateResponseString = await validateResponse.Content.ReadAsStringAsync();
                var valid = JsonConvert.DeserializeObject<ValidateReponse>(validateResponseString);
                if (valid.errCode == 0)
                {
                    valid.data.referralLink = host + "/Authorization/Registration?referral=" + valid.data.id;
                }

                var getData = new UserUtility(valid.data.auth, valid.data.id, valid.data.key);
                var balanceResponse = await httpClient.PostAsync
                   (
                   gameUtility.getBaseUrl("/transaction/get/balance"),
                   new FormUrlEncodedContent(getData.getUserKey()));

                var balanceJsonString = await response.Content.ReadAsStringAsync();
                var balanceDeserialized = JsonConvert.DeserializeObject<userBalanceResponse>(responseJsonString);

                var downlinesResponse = await httpClient.PostAsync
                    (
                    gameUtility.getBaseUrl("/register/get/agent/downlines"),
                    new FormUrlEncodedContent(getData.getUserKey()));

                var downlineJsonString = await downlinesResponse.Content.ReadAsStringAsync();
                var downlineDeserialized = JsonConvert.DeserializeObject<userDownLinesResponse>(downlineJsonString);
                var Downlines = new List<userDownLinesData>();
                if (downlineDeserialized.downlines != null)
                {
                    int ibj = downlineDeserialized.downlines.Count();
                    // var sortedGames = objDeserialized.data.data.games.Contains(categoryCode);
                    for (var i = 0; i < ibj; i++)
                    {
                        var userDownlines = new userDownLinesData();
                        userDownlines.balance_created = downlineDeserialized.downlines[i].balance_created;
                        userDownlines.balance_id = downlineDeserialized.downlines[i].balance_id;
                        userDownlines.balance_network = downlineDeserialized.downlines[i].balance_network;
                        userDownlines.balance_referrer = downlineDeserialized.downlines[i].balance_referrer;
                        userDownlines.balance_status = downlineDeserialized.downlines[i].balance_status;
                        userDownlines.balance_sum = downlineDeserialized.downlines[i].balance_sum;
                        userDownlines.balance_tag = downlineDeserialized.downlines[i].balance_tag;
                        userDownlines.balance_username = downlineDeserialized.downlines[i].balance_username;
                        Downlines.Add(userDownlines);
                    }
                }

                return Ok(new { UserDetails = valid, Balance = balanceDeserialized, Downlines = Downlines });
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(string username, string password, string referrer)
        {
            var authUtility = new AuthUtility(username, password);
            var gameUtility = new GameUtility();
            var httpClient = new HttpClient();

            try
            {
                var response = await httpClient.PostAsync
                    (
                        gameUtility.getBaseUrl("/login/session"),
                        new FormUrlEncodedContent
                        (
                            authUtility.getAuth()
                        )
                    );

                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<SessionResponse>(responseJsonString);

                var validateResponse = await httpClient.PostAsync
                    (
                        gameUtility.getBaseUrl("/register/account2"),
                        new FormUrlEncodedContent
                        (
                            authUtility.registerKey(objDeserialized.session, objDeserialized.key, referrer)
                        )
                    );

                var validateResponseString = await validateResponse.Content.ReadAsStringAsync();
                var valid = JsonConvert.DeserializeObject<ValidateReponse>(validateResponseString);
                return Ok(valid);
            }
            catch (Exception)
            {

                throw;
            }

        }

        [HttpPost]
        [Route("Reffff")]
        public async Task<IHttpActionResult> reffff()
        {
            return Ok("GAGO man diay ka!");
        }
    }
}
