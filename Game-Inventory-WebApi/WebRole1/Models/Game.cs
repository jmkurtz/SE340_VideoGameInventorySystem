using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebRole1.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string GameConsole { get; set; }
        public string Rating { get; set; }
        public int Quantity { get; set; }
        public string Description { get; set; }
    }
}