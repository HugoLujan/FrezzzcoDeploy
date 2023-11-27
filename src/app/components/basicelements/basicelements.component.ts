  import { Component, EventEmitter, OnInit, ViewChild } from "@angular/core";
  import { ServiceService } from "app/services/service.service";
  import { NgbModal, ModalDismissReasons,NgbDate, NgbCalendar, NgbDateStruct, NgbTabset } from "@ng-bootstrap/ng-bootstrap";
  import { format } from "date-fns";

  import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

  @Component({
    selector: "app-basicelements",
    templateUrl: "./basicelements.component.html",
    styleUrls: ["./basicelements.component.scss"],
  })
  export class BasicelementsComponent implements OnInit {
    services: any[] = [];
    staffs: any[] = [];
    slots: any[] = [];

    selectedSlot: any;
    selectedDate: string = "";
    currentDate: string;

    staff_key: string = "";
    service_key: string = "";
    serviceDuration: string = "";
    start_time: string = "";
    end_time: string = "";

    customer_key: string = "";
    first_name: string = "";
    email_id: string = "";
    cell_phone: string = "";

    newUserForm: FormGroup;
    loginUser: FormGroup;

    first_name_login: string = '';
    cell_phone_login: string = '';
    customer_name: string = '';


    @ViewChild("tabs") tabs: NgbTabset;
    activeTab: string = "service";

    model: NgbDateStruct;
    today: NgbDate;
    maxDate: NgbDate;
    date: { year: number; month: number };
    unavailableDates: number[] = [];

    closeResult: string;

    constructor(
      private serviceService: ServiceService,
      private modalService: NgbModal,
      private fb: FormBuilder,
      private calendar: NgbCalendar
    ) {
      this.newUserForm = this.fb.group({
        first_name: ["", Validators.required],
        last_name: [""],
        email_id: ["", Validators.email],
        cell_phone: [""],
      });
      this.loginUser = this.fb.group({
        first_name_login: new FormControl("", Validators.required),
        cell_phone_login: [""],
      });
      this.today = calendar.getToday();
      this.maxDate = this.calendar.getNext(this.today, 'd', 4); // Define 5 días disponibles desde hoy
    }

    ngOnInit() {
      this.getServices();
      this.currentDate = format(new Date(), "dd/MM/yyyy");
      const today = new Date();
      this.model = {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
      };
      this.maxDate = NgbDate.from({
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate() + 5,
      });
      //navbar
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("login-page");

      var navbar = document.getElementsByTagName("nav")[0];
      navbar.classList.add("navbar-transparent");
    }

    ngOnDestroy() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("login-page");

      var navbar = document.getElementsByTagName("nav")[0];
      navbar.classList.remove("navbar-transparent");
    }

    //modal
    open(content, type, modalDimension) {
      if (modalDimension == "lg" && type === "signIn") {
        this.modalService
          .open(content, { windowClass: "modal-login modal-primary", size: "md" })
          .result.then(
            (result) => {
              this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
          );
      } else {
        this.modalService.open(content).result.then(
          (result) => {
            this.closeResult = `Closed with: ${result}`;
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
      }
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return "by pressing ESC";
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return "by clicking on a backdrop";
      } else {
        return `with: ${reason}`;
      }
    }

    markDisabled = (date: NgbDate) => {
      const current = new Date();
      const currentDate = new Date(date.year, date.month - 1, date.day);
      // Bloquea días anteriores al actual y domingos
      return currentDate < current || date.equals(this.today) || date.day === 0;
    };
  

    //functions from setmore

    getServices() {
      this.serviceService.getServices().subscribe({
        next: (servicesResponse) => {
          console.log("Respuesta de servicios:", servicesResponse);
          this.services = servicesResponse.data.services;
        },
        error: (servicesError) => {
          console.error("Error al obtener servicios:", servicesError);
        },
      });
    }

    onServiceClick(service: any) {
      this.service_key = service.key;
      this.serviceDuration = service.duration;
      console.log(
        "Clave del servicio seleccionado:",
        this.service_key + " " + this.serviceDuration
      );
      this.getSaffs();
      this.tabs.select("staff");
    }

    getSaffs() {
      this.serviceService.getStaff().subscribe({
        next: (staffResponse) => {
          console.log("Respuesta de satff:", staffResponse);
          return (this.staffs = staffResponse.data.staffs);
        },
        error: (staffError) => {
          console.error("Error al obtener servicios:", staffError);
        },
      });
    }

    onStaffClick(staff: any) {
      this.staff_key = staff.key;
      console.log("Clave del staff seleccionado:", this.staff_key);
      this.tabs.select("timeslot");
      this.getTimeSlot();
    }

    getTimeSlot() {
      if (this.staff_key && this.service_key) {
        this.serviceService
          .getTimeSlots(this.staff_key, this.service_key, this.currentDate)
          .subscribe(
            (response) => {
              this.slots = response.data.slots;
              console.log("Intervalos de tiempo disponibles:", this.slots);
            },
            (error) => {
              console.error("Error al obtener los intervalos de tiempo:", error);
            }
          );
      }
    }

    onDateSelect(date: NgbDate) {
      const selectedDate = new Date(date.year, date.month - 1, date.day);
      this.selectedDate = format(selectedDate, "dd/MM/yyyy");
      this.currentDate = this.selectedDate;
      this.getTimeSlot();
    }

    onSlotClick(slot) {
      this.selectedSlot = slot;
      // console.log(this.selectedSlot + " " + this.currentDate);
      this.getStartTimeEndTimeFromObject();
      this.tabs.select("user");
    }

    getStartTimeEndTimeFromObject() {
      let slotDate = this.currentDate.split("/");
      let formatedDate = slotDate[2] + "-" + slotDate[1] + "-" + slotDate[0];
      this.start_time =
        formatedDate + "T" + this.selectedSlot.replace(".", ":") + "Z";
      // console.log(startTime);
      const startTimeObj = new Date(this.start_time);

      const serviceDurationMinutes = parseInt(this.serviceDuration, 10);

      if (isNaN(serviceDurationMinutes)) {
        throw new Error("Invalid service duration");
      }
      const endTimeObj = new Date(
        startTimeObj.getTime() + serviceDurationMinutes * 60000
      );

      this.start_time = this.formatDateToISOString(startTimeObj);
      this.end_time = this.formatDateToISOString(endTimeObj);

      console.log(this.end_time);
      console.log(this.start_time);

      return { startTime: this.start_time, endTime: this.end_time };
    }

    formatDateToISOString(date: Date) {
      return date.toISOString().slice(0, 16);
    }

    createUserSetmore() {
      if (this.newUserForm.valid) {
        const userData = this.newUserForm.value;
        this.serviceService
          .createUser(
            userData.first_name,
            userData.last_name,
            userData.email_id,
            userData.cell_phone
          )
          .subscribe({
            next: (res) => {
              console.log("Usuario creado con éxito:", res);
              this.customer_key = res.data.customer.key;
              this.serviceService.customerKeyEvent.emit(this.customer_key);
              console.log(this.customer_key);
              this.createAppointment();
            },
            error: (err) => {
              console.error("¡Se produjo un error al crear el usuario!", err);
            },
          });
      }
    }

    getCustomerKey() {
      if(this.loginUser.valid){
        const userData = this.loginUser.value;
        try {
          if (userData.cell_phone_login ) {
            
          }
          if ((userData.first_name_login, userData.cell_phone_login)) {
            this.serviceService
              .getUser(userData.first_name_login, userData.cell_phone_login)
              .subscribe({
                next: (res) => {
                  console.log("usuario encontrado", res);
                  this.customer_name = res.data.customer[0].first_name; 
                  this.customer_key = res.data.customer[0].key;
                  // console.log(this.customer_key);
                  // console.log(res.data[0].key);
                  this.createAppointment();
                },
                error: (err) => {
                  console.error("no se pudo obtener los datos del cliente");
                },  
              });
          }
        } catch (error) {
          console.error("Se produjo un error al buscar el usuario:", error);
        }
        
      }else{
        console.error('Ocurrio un error al registrar')
      }
    }
    

    createAppointment() {
      // console.log(this.staff_key , this.service_key , this.customer_key , this.start_time , this.end_time)
      try {
        if (
          this.staff_key &&
          this.service_key &&
          this.customer_key &&
          this.start_time &&
          this.end_time
        ) {
          this.serviceService
            .createAppointment(
              this.staff_key,
              this.service_key,
              this.customer_key,
              this.start_time,
              this.end_time
            )
            .subscribe({
              next: (res) => {
                console.log("Cita creada con éxito:", res);
              },
              error: (err) => {
                console.error("¡Se produjo un error al crear la cita!", err);
              },
            });
        } else {
          console.error("Faltan datos para crear la cita.");
        }
      } catch (error) {
        console.error("Se produjo un error:", error);
      }
    }
  }
