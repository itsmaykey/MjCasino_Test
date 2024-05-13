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
    [RoutePrefix("api/GamesApi")]
    public class GamesApiController : ApiController
    {
        [HttpPost]
        [Route("GetVendors")]
        public async Task<IHttpActionResult> GetVendors()
        {
            var games = new GameUtility();
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync(games.getBaseUrl("/api/integrations/allinone/vendor"), new FormUrlEncodedContent(games.getKey()));
                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<GameUrlDatum>(responseJsonString);

                return Ok(objDeserialized);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost]
        [Route("GetVendorGames")]
        public async Task<IHttpActionResult> GetVendorGames(string code, int size, string gameType)
        {
            var games = new GameUtility();
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync
                (
                    games.getBaseUrl("/api/integrations/allinone/gamelist"),
                    new FormUrlEncodedContent
                    (
                        games.getKeyVendorGames(code, size, gameType)
                    )
                );

                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<GamesData>(responseJsonString);
                
                var vendorGames = new List<Game>();
                foreach (var item in objDeserialized.data.data.games)
                {
                    var game = new Game();
                    game.gameCode = item[0];
                    game.gameName = item[1];
                    game.gameType = item[2];
                    game.gameCover = item[3];
                    game.gameNull = item[4];
                    game.language = item[5];
                    game.platform = item[6];
                    game.currency = item[7];

                    if (game.gameType == gameType)
                    {
                        vendorGames.Add(game);
                    }
                    else
                    {

                    }
                    
                }

                return Ok(new
                {
                    VendorGamesData = objDeserialized,
                    ConvertedData = vendorGames
                });
            }
            catch (Exception)
            {

                throw;
            }
        }



        [HttpPost]
        [Route("GetVendorGameUrl")]
        public async Task<IHttpActionResult> GetVendorGameUrl(string code, string clientIP)
        {
            var games = new GameUtility();
            var httpClient = new HttpClient();
            try
            {
                var response = await httpClient.PostAsync
                (
                    games.getBaseUrl("/api/integrations/allinone/game/url"),
                    new FormUrlEncodedContent
                    (
                        games.getKeyVendorGameUrl(code, clientIP)
                    )
                );

                var responseJsonString = await response.Content.ReadAsStringAsync();
                var objDeserialized = JsonConvert.DeserializeObject<GameUrl>(responseJsonString);



                return Ok(objDeserialized);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
