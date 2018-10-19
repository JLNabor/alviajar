import { Component, OnInit } from '@angular/core';
import { AlViajar } from '../module/alViajar';

@Component({
  selector: 'app-alviajar',
  templateUrl: './alviajar.component.html',
  styleUrls: ['./alviajar.component.scss']
})
export class AlviajarComponent implements OnInit {

  public alViajarInfo= new Array<AlViajar>();

  constructor() { }

  ngOnInit() {
    this.AddAlViajar();
  }

  public AddAlViajar(){
    this.alViajarInfo.push(
    {Id:"costarica1", Name:"costarica1.jpg", imgName:"costarica1.jpg", Description:"PURA VIDA!!!!! 7 noches vacacionando en increíbles paisajes!!!! Aplica en salidas hasta el 30 de noviembre!"},
    {Id:"europa1", Name:"europa1.jpg", imgName:"europa1.jpg", Description:"Super trip a Europa en Octubre!!!! Vamonos!! junta a tus amigos y pasa 20 dias increibles en el viejo mundo."},
    {Id:"peru1", Name:"peru1.jpg", imgName:"peru1.jpg", Description:"La llama te llama! Siempre has querido ir a Perú a conocer una de las maravillas del mundo? esta es tu oportunidad!! Viaja en octubre o noviembre a súper precio! Cotiza sin compromiso!"},
    {Id:"puntacana1", Name:"puntacana1.jpg", imgName:"puntacana1.jpg", Description:"Ya armaste tu plan de año nuevo? Vamos a PUNTA CANA 06 noches en plan todo incluido y vuelo directo de CDMX. Súper promo!! Visítanos, escribe o llama para mayor información."},
    {Id:"riodejaneiro1", Name:"riodejaneiro1.jpg", imgName:"riodejaneiro1.jpg", Description:"PERU Y BRASIL EN UN SOLO VIAJEE!!!!!! Te animas? Las mejores 10 noches de tu vida para que no te preocupes por nada!!!! Cotiza con nosotros!"},
    {Id:"tokio1", Name:"tokio1.jpg", imgName:"tokio1.jpg", Description:"NO LO PUEDES DEJAR PASAR!!!! Compra antes del 15 de septiembre y llévate este súper precio para ir a TOKIO! saliendo de la cdmx!"});
  }

}
