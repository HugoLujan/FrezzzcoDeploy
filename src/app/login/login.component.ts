import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

 
  data: Date = new Date();
  focus;
  focus1;
  hide = new FormControl(true);
  errorMessage: string = "";
  private subscription: Subscription = new Subscription();

  constructor(
    private authSvc: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const auth = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    };
    // console.log(auth)
    this.authSvc.logIn(auth).subscribe((res) => {
      // console.log(res);
      if (res) {
        console.log(res);
        this.router.navigate(['/menuAdmin']);
      } else {
        console.log('Ups');
      }
    });
  }

  ngOnInit(): void {
    // console.log('test')
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
    // const userData = {
    //   username: 'test2',
    //   password: 'test1234',
    // };
    // this.authSvc.logIn(userData).subscribe((res)=> console.log('login'))
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }

  isPasswordEmpty(): boolean {
    return this.loginForm.get("password")?.value === "";
  }

  // onLogin(): void {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   const auth = {
  //     user: this.loginForm.get('username')?.value,
  //     password: this.loginForm.get('password')?.value
  //   }

  //   // Mapeo de roles a rutas
  //   const roleRoutes: { [role: string]: string } = {
  //     'Admin': '/adminDashboard',
  //     'Accountant': '/settings',
  //     'Consultant': '/consultants',
  //     'Client': '/clients'
  //   };

  //   // Suscribirse al servicio de login
  //   this.subscription.add(
  //     this.authSvc.login(auth).subscribe((res) => {
  //       if (res) {
  //         const route = roleRoutes[res.role];
  //         if (route) {
  //           this.router.navigate([route]);
  //         } else {
  //           console.log('Ups');
  //           return;
  //         }
  //       }
  //     },
  //     (error) => {
  //       this.errorMessage = 'Usuario o contraseña incorrectos';
  //     })
  //   )
  // }

  getErrorMessage(field: string): string {
    let message = "";
    const controlErrors: ValidationErrors | null | undefined =
      this.loginForm.get(field)?.errors;
    if (controlErrors) {
      if (controlErrors["required"]) {
        message = "Ingrese sus credenciales";
      }
    }
    return message;
  }

  isValidField(field: string): boolean {
    let fieldControl = this.loginForm.get(field) || false;
    return (
      fieldControl &&
      (fieldControl.touched || fieldControl.dirty) &&
      !fieldControl.valid
    );
  }

  toggleHide() {
    this.hide.setValue(!this.hide.value);
  }
}
