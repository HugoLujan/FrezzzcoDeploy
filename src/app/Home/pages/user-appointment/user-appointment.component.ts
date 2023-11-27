import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'app/services/service.service';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.scss']
})
export class UserAppointmentComponent implements OnInit {

  newUserForm: FormGroup;

  customer_key: string = '';



  constructor(
    private fb: FormBuilder,
    private serviceService: ServiceService
  ) {
    this.newUserForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: [''],
      email_id: ['', Validators.email],
      cell_phone: [''],
    });
  }

  ngOnInit(): void {
  }

  createUserSetmore() {
    if (this.newUserForm.valid) {
      const userData = this.newUserForm.value;
      this.serviceService.createUser(
        userData.first_name,
        userData.last_name,
        userData.email_id,
        userData.cell_phone
      ).subscribe(
        (res) => {
          console.log('Usuario creado con éxito:', res);
          this.customer_key = res.data.customer.key;
          this.serviceService.customerKeyEvent.emit(this.customer_key); // Emite el evento con customer_key
          console.log(this.customer_key);
        },
        (err) => {
          console.error('¡Se produjo un error al crear el usuario!', err);
        }
      );
    }
  }
}
