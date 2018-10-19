import { Component, OnInit, Input } from '@angular/core';
import { Etravel, EtravelType } from '../module/etravel';

@Component({
  selector: 'app-item-etravel',
  templateUrl: './item-etravel.component.html',
  styleUrls: ['./item-etravel.component.scss']
})
export class ItemEtravelComponent implements OnInit {

  @Input() titleItem: string;
  @Input() items: Etravel[];
  public eTravelType= EtravelType;

  constructor() {

   }

  ngOnInit() {
  }

}
