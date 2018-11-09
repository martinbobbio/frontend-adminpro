import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-graphic",
  templateUrl: "./graphic.component.html",
  styles: []
})
export class GraphicComponent implements OnInit {
  graficos: any = {
    grafico1: {
      labels: ["Neymar", "Messi", "Cristiano"],
      data: [24, 30, 46],
      leyenda: "Mejor jugador del mundo"
    },
    grafico2: {
      labels: ["Hombres", "Mujeres"],
      data: [4500, 6000],
      leyenda: "Entrevistados"
    },
    grafico3: {
      labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
      data: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Zona A" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Zona B" }
      ],
      leyenda: "Ganancias por año"
    },
    grafico4: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      data: [
        { data: [65, 59, 80, 81, 56, 55], label: "Zona A" },
        { data: [28, 48, 40, 19, 86, 27], label: "Zona B" }
      ],
      leyenda: "Perdidas por mes"
    }
  };

  constructor() {}

  ngOnInit() {}
}
