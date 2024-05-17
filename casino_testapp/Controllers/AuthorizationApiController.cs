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
        public async Task<IHttpActionResult> Login(string username, string password)
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
                return Ok(valid);
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
