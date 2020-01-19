using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;

namespace WebRole1.Models
{
    public class DatabaseConnect
    {
        private SqlConnectionStringBuilder builder;

        public DatabaseConnect()
        {
            this.builder = new SqlConnectionStringBuilder();
            this.builder.DataSource = "game-inventory-se340.database.windows.net";
            this.builder.UserID = "jmkurtz";
            this.builder.Password = "Eugo5453";
            this.builder.InitialCatalog = "Game-Inventory-Database";
        }

        public Game GetGame(int id)
        {
            var game = new Game();

            try
            {
                using (SqlConnection connection = new SqlConnection(this.builder.ConnectionString))
                {
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    sb.Append("SELECT * FROM [dbo].[Game] WHERE Id=" + id + ";");

                    using (SqlCommand command = new SqlCommand(sb.ToString(), connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                game = this.ReaderToGame(reader);
                            }
                        }
                    }
                    connection.Close();
                }
            }
            catch
            {
                return null;
            }

            return game;
        }

        public List<Game> GetGames()
        {
            var games = new List<Game>();

            try
            {
                using (SqlConnection connection = new SqlConnection(this.builder.ConnectionString))
                {
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    sb.Append("SELECT * FROM [dbo].[Game];");

                    using (SqlCommand command = new SqlCommand(sb.ToString(), connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                games.Add(this.ReaderToGame(reader));
                            }
                        }
                    }
                    connection.Close();
                }
            }
            catch
            {
                return null;
            }

            return games;
        }

        public void AddGame(Game game)
        {
            try
            {
                game.Id = GetGames().Last().Id + 1;
            }
            catch
            {
                game.Id = 1;
            }
            

            try
            {
                using (SqlConnection connection = new SqlConnection(this.builder.ConnectionString))
                {
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    sb.Append("INSERT INTO [dbo].[Game] VALUES(@id, @title, @console, @rating, @quantity, @description);");

                    using (SqlCommand command = new SqlCommand(sb.ToString(), connection))
                    {
                        command.Parameters.AddWithValue("@id", game.Id);
                        command.Parameters.AddWithValue("@title", game.Title);
                        command.Parameters.AddWithValue("@console", game.GameConsole);
                        command.Parameters.AddWithValue("@rating", game.Rating);
                        command.Parameters.AddWithValue("@quantity", game.Quantity);
                        command.Parameters.AddWithValue("@description", game.Description);

                        command.ExecuteNonQuery();
                    }
                    connection.Close();
                }
            }
            catch(Exception ex)
            { }
        }

        public void EditGame(int id, Game game)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(this.builder.ConnectionString))
                {
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    sb.Append("UPDATE [dbo].[Game] SET Title = @title, Console = @console, Rating = @rating, Quantity = @quantity, Description = @description WHERE Id=" + id + ";");

                    using (SqlCommand command = new SqlCommand(sb.ToString(), connection))
                    {
                        command.Parameters.AddWithValue("@title", game.Title);
                        command.Parameters.AddWithValue("@console", game.GameConsole);
                        command.Parameters.AddWithValue("@rating", game.Rating);
                        command.Parameters.AddWithValue("@quantity", game.Quantity);
                        command.Parameters.AddWithValue("@description", game.Description);

                        command.ExecuteNonQuery();
                    }
                    connection.Close();
                }
            }
            catch (Exception ex)
            { }
        }

        public void DeleteGame(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(this.builder.ConnectionString))
                {
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    sb.Append("DELETE FROM [dbo].[Game] WHERE Id=" + id + ";");

                    using (SqlCommand command = new SqlCommand(sb.ToString(), connection))
                    {
                        command.ExecuteNonQuery();
                    }
                    connection.Close();
                }
            }
            catch (Exception ex)
            { }
        }

        public void ClearGames()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(this.builder.ConnectionString))
                {
                    connection.Open();
                    StringBuilder sb = new StringBuilder();
                    sb.Append("DELETE FROM [dbo].[Game]");

                    using (SqlCommand command = new SqlCommand(sb.ToString(), connection))
                    {
                        command.ExecuteNonQuery();
                    }
                    connection.Close();
                }
            }
            catch (Exception ex)
            { }
        }

        #region Helper Methods
        private Game ReaderToGame(SqlDataReader reader)
        {
            var game = new Game();

            game.Id = reader.GetInt32(0);
            game.Title = reader.GetString(1);
            game.GameConsole = reader.GetString(2);
            game.Rating = reader.GetString(3);
            game.Quantity = reader.GetInt32(4);
            game.Description = reader.GetString(5);

            return game;
        }

        private string GameToString(Game game)
        {
            var gameString = new StringBuilder();

            gameString.Append("(");
            gameString.Append(game.Id);
            gameString.Append(", ");
            gameString.Append(game.Title);
            gameString.Append(", ");
            gameString.Append(game.GameConsole);
            gameString.Append(", ");
            gameString.Append(game.Rating);
            gameString.Append(", ");
            gameString.Append(game.Quantity);
            gameString.Append(", ");
            gameString.Append(game.Description);
            gameString.Append(")");

            return gameString.ToString();
        }

        #endregion
    }
}