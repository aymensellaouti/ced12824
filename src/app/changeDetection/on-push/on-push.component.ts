import { Component } from '@angular/core';
import { ConnectedUser } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css']
})
export class OnPushComponent {

  name = "aymen";

  user: ConnectedUser = {
    id: 1,
    email: "aymen@gmail.com"
  }
}
