import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day30';

  image = '/assets/ostrich_2.jpg'
  count = 0

  imageClicked($event: string) {
    console.info(">>>>>>app.component: image clicked", $event)
    this.image = $event
    this.count++
  }
}