using casino_testapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace casino_testapp.Controllers
{
    [RoutePrefix("api/GamesApi")]
    public class GamesApiController : ApiController
    {
        [HttpPost]
        [Route("GetVendors")]
        public async Task<IHttpActionResult> GetVendors()
        {
            var games = new Games();
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync(games.getBaseUrl("/api/integrations/allinone/vendor"), new FormUrlEncodedContent(games.getKey()));
                return Ok(await response.Content.ReadAsStringAsync());
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
