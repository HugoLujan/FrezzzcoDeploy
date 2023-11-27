import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from 'app/services/admin-service.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  newUserForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    private adminSvc: AdminServiceService,
  ) {
    this.newUserForm = this.fb.group({
      user: ['', Validators.required],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  // createAdmin() {
  //   if (this.newUserForm.valid) {
  //     const userData = this.newUserForm.value;
  //     const adminData: authModel = { user: userData.user, password: userData.password }; // Crear el objeto AdminModel
  //     this.adminSvc.createAdmin(adminData).subscribe((res) => {
  //       console.log('Usuario creado con éxito:', res);
  //       const newCredential: CredentialModel = {
  //         user: userData.user,
  //         password: userData.password,
  //         role: "Admin",
  //         // Otros campos que necesites configurar para la credencial
  //       };
  //       this.credenial.createCredential(newCredential).subscribe((credentialRes) => {
  //         console.log('Credencial creada con éxito:', credentialRes);
  //         // Realiza las operaciones adicionales aquí
  //       }, (credentialErr) => {
  //         console.error('¡Error al crear la credencial!', credentialErr);
  //       });
  //     }, (err) => {
  //       console.error('¡Se produjo un error al crear el usuario!', err);
  //     });
  //   }
  // }
  
  
}
