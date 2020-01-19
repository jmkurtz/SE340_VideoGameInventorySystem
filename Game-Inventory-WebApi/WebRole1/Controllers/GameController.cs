using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebRole1.Models;

namespace WebRole1.Controllers
{
    public class GameController : ApiController
    {
        private DatabaseConnect DBConnect = new DatabaseConnect();

        // GET api/values
        public List<Game> Get()
        {
            return DBConnect.GetGames();
        }

        // GET api/values/5
        public Game Get(int id)
        {
            return DBConnect.GetGame(id);
        }

        // POST api/values
        public void Post([FromBody]Game game)
        {
            DBConnect.AddGame(game);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Game game)
        {
            DBConnect.EditGame(id, game);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            DBConnect.DeleteGame(id);
        }

        // DELETE api/values
        public void Delete()
        {
            DBConnect.ClearGames();
        }
    }
}
