import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vicbank';

  transferencia: any = {};

  transferir($event: any) {
    console.log($event);
    this.transferencia = $event
  }


}
