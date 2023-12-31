import { Component, OnInit, Renderer2, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgbDateStruct, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
      ngb-progressbar {
        margin-top: 5rem;
      }
    `]
  })

export class ComponentsComponent implements OnInit, OnDestroy {

    @ViewChild('contentSection', { static: true }) contentSection: ElementRef;
    @ViewChild('mainSection') mainSection: ElementRef;

    contentVisible = false;

    data : Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;
    

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    constructor(
        private renderer: Renderer2,
        config: NgbAccordionConfig
      ) {
        config.closeOthers = true;
        config.type = 'info';
      }

      toggleContent() {
        this.contentVisible = !this.contentVisible;
      
        if (this.contentVisible) {
          const mainSectionOffsetTop = this.mainSection.nativeElement.offsetTop;
          const scrollPosition = mainSectionOffsetTop + this.mainSection.nativeElement.clientHeight;
          
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }
      }

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
