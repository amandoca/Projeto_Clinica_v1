import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {

  @Input() title = '';
  @Input() backButton = false;
  @Input() menuButton = false;

  @Output() emitter = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  alguemMeClicou(){
    console.log("Alguem me clicou. UIIII");
    this.emitter.emit({item: 'toolbarClick'});
  }

}
