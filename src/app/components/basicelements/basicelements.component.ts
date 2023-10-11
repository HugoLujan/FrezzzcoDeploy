import { JsonPipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ServiceService } from "app/services/service.service";
import { NgbCalendar, NgbDateStruct, NgbTabset } from "@ng-bootstrap/ng-bootstrap";
import { format } from "date-fns";


@Component({
  selector: "app-basicelements",
  templateUrl: "./basicelements.component.html",
  styleUrls: ["./basicelements.component.scss"],
})
export class BasicelementsComponent implements OnInit {
  services: any[] = [];
  staffs: any[] = [];
  hours: any[] = [];
  currentDate: string;
  staffKey: string;
  serviceKey: string; 



  @ViewChild("tabs") tabs: NgbTabset;
  activeTab: string = "servicios"; // Nombre de la pestaña "Servicios" como activa por defecto

  //calendario
  model: NgbDateStruct;
	date: { year: number; month: number };

  constructor(private serviceService: ServiceService,
    private calendar: NgbCalendar)
    {}

  ngOnInit() {
    this.getServices();
    this.currentDate = format(new Date(), 'dd/MM/yyyy');
    // this.fetchTimeSlots();
    this.selectToday();
  }

  getServices() {
    this.serviceService.getServices().subscribe(
      (servicesResponse) => {
        console.log("Respuesta de servicios:", servicesResponse);
        // Aquí puedes manejar los datos de los servicios
        return this.services = servicesResponse.data.services;
      },
      (servicesError) => {
        console.error("Error al obtener servicios:", servicesError);
      }
    );
  }

  onServiceClick(service: any) {
    const serviceKey = service.key;
    console.log("Clave del servicio seleccionado:", serviceKey);
    this.getSaffs();
    this.tabs.select("home"); // Cambia "home" al identificador de la pestaña "Home"
    // Aquí puedes hacer lo que quieras con serviceKey
  }

  getSaffs() {
    this.serviceService.getStaff().subscribe(
      (staffResponse) => {
        console.log("Respuesta de satff:", staffResponse);
        // Aquí puedes manejar los datos de los servicios
        return this.staffs = staffResponse.data.staffs;
      },
      (staffError) => {
        console.error("Error al obtener servicios:", staffError);
      }
    );   
  }

  onStaffClick(staff: any) {
    const staffKey = staff.key;
    console.log("Clave del staff seleccionado:", staffKey);
    this.tabs.select("messages"); // Cambia "home" al identificador de la pestaña "Home"
    // Aquí puedes hacer lo que quieras con serviceKey
  }

  fetchTimeSlots() {
    // Verifica si ambas claves están definidas antes de hacer la solicitud
    if (this.staffKey && this.serviceKey) {
      this.serviceService
        .getTimeSlots(this.staffKey, this.serviceKey, this.currentDate)
        .subscribe(
          (response) => {
            this.hours = response; // Asigna la respuesta a tu propiedad 'hours'
            console.log("Intervalos de tiempo disponibles:", response);
            // Maneja los datos de los intervalos de tiempo aquí
          },
          (error) => {
            console.error("Error al obtener los intervalos de tiempo:", error);
          }
        );
    }
  }

  selectToday() {
		this.model = this.calendar.getToday();
    console.log(this.model = this.calendar.getToday());

	}
  
}
