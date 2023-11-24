import { Component, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})


export class QuestionsComponent implements AfterViewInit{

  ngAfterViewInit() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#acordeon" ).accordion({
      icons: icons,
      collapsible: true,
      heightStyle: "content"
    }); // Donde '#acordeon' es el selector de tu acordeón
  }
  
}

