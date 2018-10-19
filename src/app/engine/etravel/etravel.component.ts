import { Component, OnInit } from '@angular/core';
import { Etravel, EtravelType } from '../module/etravel';

@Component({
  selector: 'app-etravel',
  templateUrl: './etravel.component.html',
  styleUrls: ['./etravel.component.scss']
})
export class EtravelComponent implements OnInit {

  public etravelHotel= new Array<Etravel>();
  public etravelDestinos= new Array<Etravel>();
  public etravelTours= new Array<Etravel>();
  public etravelAutos= new Array<Etravel>();
  public etravelTraslados= new Array<Etravel>();
  public titleHotel:string="Hoteles";
  public titleDestinos:string="Destinos";
  public titleTours:string="Tours";
  public titleAutos:string= "Autos";
  public titleTraslados:string="Traslados";

  constructor() { }

  ngOnInit() {
    this.AddEtravel();
  }

  public AddEtravel(){
    this.etravelHotel.push(
    {Id:"casaquecanta", Name:"La Casa Que Canta - Zihuatanejo", Description:"", imgName:"hotel/casaquecanta.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Hotel},
    {Id:"granpalladium", Name:"Grand Palladium - Vallarta", Description:"", imgName:"hotel/granpalladium.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Hotel},
    {Id:"granvelas", Name:"Grand Velas Riviera Maya-Luxury", Description:"", imgName:"hotel/granvelas.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Hotel},
    {Id:"mayakoba", Name:"Fairmont Mayakoba - Riviera Maya", Description:"", imgName:"hotel/mayakoba.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Hotel},
    {Id:"resortatpedregal", Name:"The Resort at Pedregal - Los Cabos", Description:"", imgName:"hotel/resortatpedregal.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Hotel},
    {Id:"ventanasalparaiso", Name:"Las Ventanas al Paraiso - Los Cabos", Description:"", imgName:"hotel/ventanasalparaiso.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Hotel}
    );

    this.etravelDestinos.push(
    {Id:"caboSanLucas", Name:"Los cabos", Description:"", imgName:"destination/caboSanLucas.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Destination},
    {Id:"cancun", Name:"Cancún", Description:"", imgName:"destination/cancun.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Destination},
    {Id:"cdmx", Name:"Ciudad de México", Description:"", imgName:"destination/cdmx.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Destination},
    {Id:"queretaro", Name:"Querétaro", Description:"", imgName:"destination/queretaro.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Destination},
    {Id:"sancristobal", Name:"San Miguel de Allende", Description:"", imgName:"destination/sancristobal.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Destination},
    {Id:"sanmiguel", Name:"San Cristobal", Description:"", imgName:"destination/sanmiguel.jpg", urlEtravel:"https://www.e-tsw.com/Hoteles/Lista?af=af-tujp&ot=0&di=19&ln=esp&cu=PE&alf=0&GAProd=HT&d=cun", type:EtravelType.Destination}
    );

    this.etravelTours.push(
    {Id:"celestun", Name:"Celestun", Description:"", imgName:"tour/celestun.jpg", urlEtravel:"", type:EtravelType.Tour},
    {Id:"chichen", Name:"Chichén Itzá", Description:"", imgName:"tour/chichen.jpg", urlEtravel:"", type:EtravelType.Tour},
    {Id:"taxco", Name:"Taxco", Description:"", imgName:"tour/taxco.jpg", urlEtravel:"", type:EtravelType.Tour},
    {Id:"teotihucan", Name:"Teotihuacán", Description:"", imgName:"tour/teotihucan.jpg", urlEtravel:"", type:EtravelType.Tour},
    {Id:"xcaret", Name:"Xcaret", Description:"", imgName:"tour/xcaret.jpg", urlEtravel:"", type:EtravelType.Tour},
    {Id:"xelha", Name:"Xel-Há", Description:"", imgName:"tour/xelha.jpg", urlEtravel:"", type:EtravelType.Tour}
    );

    this.etravelAutos.push(
    {Id:"bmw", Name:"BMW 320i", Description:"", imgName:"car/bmw.jpg", urlEtravel:"", type:EtravelType.Car},
    {Id:"DogeIO", Name:"Dodge I-10", Description:"", imgName:"car/DogeIO.jpg", urlEtravel:"", type:EtravelType.Car},
    {Id:"jeeppatriot", Name:"Jeep Patriot", Description:"", imgName:"car/jeeppatriot.jpg", urlEtravel:"", type:EtravelType.Car}
    );

    this.etravelTraslados.push(
    {Id:"van", Name:"Compartido", Description:"", imgName:"shuttle/van.jpg", urlEtravel:"", type:EtravelType.Shuttle},
    {Id:"van", Name:"Privado", Description:"", imgName:"shuttle/van.jpg", urlEtravel:"", type:EtravelType.Shuttle}
    );
  }


}
