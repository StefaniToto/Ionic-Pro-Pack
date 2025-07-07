import { Component, OnInit } from '@angular/core';
import {  ModalController} from '@ionic/angular';

@Component({
    selector: 'app-bar-code-modal',
    templateUrl: './bar-code-modal.component.html',
    styleUrls: ['./bar-code-modal.component.scss'],
    standalone: false
})
export class BarCodeModalComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }

}
