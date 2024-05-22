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
        [Route("GetBalance")]
        public async Task<IHttpActionResult> GetBalance()
        {
            var getData = new GameUtility();
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync(getData.getBaseUrl("/transaction/get/history/all"), new FormUrlEncodedContent(getData.getKey()));
                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<UserBalanceResponse>(responseJsonString);

                
                return Ok(objDeserialized);
            }
            catch (Exception)
            {

                throw;
            }
        }
    
    }
}