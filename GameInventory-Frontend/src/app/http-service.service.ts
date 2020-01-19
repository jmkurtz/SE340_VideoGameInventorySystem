import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GameDto } from './models/gameDto';
import { Observable } from 'rxjs';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  newGameItem : GameDto

  constructor(private http: HttpClient) { }

  createNewGame(gameConsole: string) {
    this.newGameItem = {
      Id: 0,
      Title: "N/A",
      Rating: "N/A",
      GameConsole: gameConsole,
      Quantity: 0,
      Description: "N/A"
    };
  }

  filterGames(theGames: GameDto[], gameConsole: string) : GameDto[]{
    return theGames.filter(g => g.GameConsole.match(gameConsole));
  }

  addGame() {
    return this.http.post<GameDto>('api/game', this.newGameItem);
  }

  editGame() {
    return this.http.put<GameDto>('api/game/' + this.newGameItem.Id, this.newGameItem);
  }

  getAllGames() : Observable<GameDto[]>{
    return this.http.get<GameDto[]>('api/game', options);
  }

  getGame(id:string) : Observable<GameDto>{
    return this.http.get<GameDto>('api/game/' + id);
  }

  deleteGame() {
    console.log(this.newGameItem);
    return this.http.delete('api/game/' + this.newGameItem.Id, options);
  }

  deleteAllGames() {
    return this.http.delete('api/game', options)
  }
}
