import { Component } from '@angular/core';
import { ICharacter } from 'src/app/Models/icharacter';
import { DrangonBallzService } from 'src/app/Services/drangon-ballz.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  characters : ICharacter[] = []


  constructor(private _service : DrangonBallzService) {

  }

  ngOninit() {
    let startUrl : string = "https://dragon-ballz-super-api.site/api"
      this.loadCharacter(startUrl)
  }

  loadCharacter(url : string) {
    this._service.getAll(url).subscribe({
      next : (data : ICharacter) => {
        this.characters = data
        console.log(this.characters)
      }
    })
  }

}



