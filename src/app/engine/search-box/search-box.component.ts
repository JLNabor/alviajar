import { Component, OnInit } from '@angular/core';
import { Promo } from '../module/promo';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public promo= new Array<Promo>();

  constructor() { }

  ngOnInit() {
    this.AddPromo();
  }

  public AddPromo(){
      this.promo.push(
      {Id:"4-OUH-Tulum", Name:"TULUM", imgName:"4-OUH-Tulum.jpg", Description:"HASTA 50% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TUJPAF-TUJPAF-TUJPAF-TUJPAF-TUJP&cu=PE&ln=ESP&sd=2018/10/26&ed=2018/10/29&ds=1001&rm=1&ad1=2&ch1=0&utm_source=MALLOFUHR&utm_medium=MALLOFUHR&utm_campaign=MALLOFUHR&afb=MALLOFUHR&afb=&afb=&afb=&afb=&_ga=2.239402560.2114105654.1540147872-743724362.1538966058"},
      {Id:"1-OUH-Playa-del-Carmen", Name:"PLAYA DEL CARMEN", imgName:"1-OUH-Playa-del-Carmen.jpg", Description:"HASTA UN 70% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Paquetes/Lista?af=AF-TUJP&cu=PE&ln=ESP&sd=2018/10/26&ed=2018/10/29&ds=16&ob=GDL&ib=CUN&no=Guadalajara%20(GDL)%20Aeropuerto%20Miguel%20Hidalgo%20y%20Costilla,%20M%C3%A9xico&ni=Playa%20del%20Carmen,%20M%C3%A9xico%20-%20Aeropuerto%20Internacional%20de%20Canc%C3%BAn%20(CUN)&rm=1&ad1=2&ch1=0&utm_source=MALLOFUHR&utm_medium=MALLOFUHR&utm_campaign=MALLOFUHR&afb=MALLOFUHR&_ga=2.239402560.2114105654.1540147872-743724362.1538966058"},
      {Id:"2-OUH-Puerto-Vallarta", Name:"PUERTO VALLARTA", imgName:"2-OUH-Puerto-Vallarta.jpg", Description:"HASTA UN 69% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Paquetes/Lista?af=AF-TUJP&cu=PE&ln=ESP&sd=2018/10/26&ed=2018/10/29&ds=12&ob=MEX&ib=PVR&no=Ciudad%20de%20M%C3%A9xico%20(MEX)%20Aeropuerto%20Internacional%20Benito%20Ju%C3%A1rez,%20M%C3%A9xico&ni=Puerto%20Vallarta,%20M%C3%A9xico%20-%20Aeropuerto%20Gustavo%20D%C3%ADaz%20Ordaz%20(PVR)&rm=1&ad1=2&ch1=0&utm_source=MALLOFUHR&utm_medium=MALLOFUHR&utm_campaign=MALLOFUHR&afb=MALLOFUHR&_ga=2.239935424.2114105654.1540147872-743724362.1538966058"},
      {Id:"acapulco", Name:"ACAPULCO", imgName:"acapulco.jpg", Description:"HASTA UN 60% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TUJP&cu=PE&ln=ESP&sd=2018/10/26&ed=2018/10/29&ds=1&rm=1&ad1=2&ch1=0&utm_source=MALLOFUHR&utm_medium=MALLOFUHR&utm_campaign=MALLOFUHR&afb=MALLOFUHR&_ga=2.137368307.2114105654.1540147872-743724362.1538966058"},
      {Id:"cuernavaca", Name:"CUERNAVACA", imgName:"cuernavaca.jpg", Description:"HASTA UN 35% DE DESCUENTO", urlEtravel:"http://www.e-tsw.com/Hoteles/Lista?af=AF-TUJP&cu=PE&ln=ESP&sd=2018/10/26&ed=2018/10/29&ds=57&rm=1&ad1=2&ch1=0&utm_source=MALLOFUHR&utm_medium=MALLOFUHR&utm_campaign=MALLOFUHR&afb=MALLOFUHR&_ga=2.246406727.2114105654.1540147872-743724362.1538966058"}
      );
  }

 
}
