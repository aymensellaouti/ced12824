import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input({

  })
  messageDePapa = "je n'ai pas encore recu de message";
  @Output()
  sendDataToPapa = new EventEmitter<string>();

  sendMessage() {
    this.sendDataToPapa.emit('cc Papa');
  }
}
