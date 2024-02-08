import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {LoginCredentials} from "../../theme/Files/LoginInterfaces";

import {StorageService} from "../../shared/services/storage.service";
import {Constants} from "../../../environments/contants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

//  private loginService = new LoginService();
  private localStorage = StorageService.getInstance();

  /*
  *   Placement of input text and configurations
  * */
  text                  : string      = "text";
  typePassword          : string      = "password";
  passwordAutocomplete  : string      = "current-password";
  userAutocomplete      : string      = "username";
  userName              : string      = "Username";
  passwordName          : string      = "Password";
  emailPlaceholder      : string      = "Correo electrónico";
  passwordPlaceholder   : string      = "Contraseña"
  @Input() usrname : string = "";
  @Input() psswrd : string = "";



  /*
  *   Basic data structure to validate credentials and
  * */

  loginData             : any         = { username: "", password: "" };
  errorsContainer       : any         = { username: false, password: false, credentials: false, errorData: "", usernameError: "", passwordError: "" };

  /*
  *   Temporal dummy data - TODO: Replace this with an API
  * */

  user                  : any         = { username: "Jose", password: "123456" };
  userBlock             : any         = { username: "Edgar", password: "123456", isBlock: true };

  constructor(
    private service: LoginService,
    private router : Router,
    private loginService : LoginService
  ) {

  }

  ngOnInit() { }

  validateLogin = async () => {
    let validateBody = this.validateLoginBody();

    if (!validateBody.isValid){
      alert(validateBody.message);
      console.log("Login disabled", /*validateBody.message*/);
      return;
    }


    let loginBody : LoginCredentials = {
      account : "FINGO",
      identifier : this.usrname,
      secret : this.psswrd,
    }

    await this.loginService.login(loginBody).subscribe({
      next : async (loginResponse : any) => {
          if(loginResponse && loginResponse.token){
            this.saveLoginInfoAndNavigate(loginResponse).then();
            return;
          }
          alert('Ocurrió un error al iniciar sesión, por favor intentalo más tarde IF');
      }, error : (err : any) => {
        alert('Ocurrió un error al iniciar sesión, por favor intentalo más tarde ERROR');
        console.log("Login error: ", err)
      }
    })
  }


  private async saveLoginInfoAndNavigate(loginInformation : any){
    await this.localStorage.setLocal(Constants.localKeys.session, loginInformation);
    this.doLogin();
  }

  validateLoginBody(){

    let validationResponse = {
      isValid : true,
      message : ''
    };

    if(this.loginData.username.trim() === '' || this.loginData.password.trim() === ''){
      validationResponse.isValid = false;
      validationResponse.message = 'Los campos no deben estar vacios';
      return validationResponse;
    }

    return validationResponse;
  };

  getPasswordValue(event) {
    this.psswrd = event;
    console.log(this.psswrd)
    this.loginData.password = event;
  }

  getUsernameValue(event) {
    this.usrname = event;
    console.log(this.usrname)
    this.loginData.username = event;
  }

  validateData() {

   // General valid flag.
    let allParamsFilled: boolean = true;
   // Make sure you have all your params filled first.

   // If user and password field are empty.
    if (!this.loginData.username) {
      this.errorsContainer.username = true;
      this.errorsContainer.usernameError = "Campo requerido";
      allParamsFilled = false;
    }

    if (!this.loginData.password) {
      this.errorsContainer.password = true;
      this.errorsContainer.passwordError = "Campo requerido";
      allParamsFilled = false;
    }

   // If user not exist and block user.
    if ((this.loginData.username !== "" && this.userBlock.username === this.loginData.username) && this.userBlock.isBlock) {
      this.errorsContainer.credentials = true;
      this.errorsContainer.username = true;
      this.errorsContainer.usernameError = "";
      this.errorsContainer.password = false;
      this.errorsContainer.errorData = "Cuenta bloqueada.";
      allParamsFilled = false;
    } else if ((this.loginData.username !== "" && this.loginData.username !== this.user.username) && (this.loginData.password !== "" && this.loginData.password !== this.user.password)) {
      this.errorsContainer.credentials = true;
      this.errorsContainer.username = true;
      this.errorsContainer.password = true;
      this.errorsContainer.usernameError = "";
      this.errorsContainer.passwordError = "";
      this.errorsContainer.errorData = "Credenciales incorrectas.";
      allParamsFilled = false;
    } else if ((this.loginData.username !== "" && this.loginData.username !== this.user.username) || (this.loginData.password !== "" && this.loginData.password !== this.user.password)) {
      this.errorsContainer.credentials = true;
      this.errorsContainer.username = true;
      this.errorsContainer.password = true;
      this.errorsContainer.usernameError = "";
      this.errorsContainer.passwordError = "";
      this.errorsContainer.errorData = "Credenciales incorrectas.";
      allParamsFilled = false
    }

    // End of validations.
    if (allParamsFilled) {
      this.errorsContainer.username = false;
      this.errorsContainer.password = false;
      this.errorsContainer.credentials = false;
      this.doLogin()
    }
  }

  // Call Service.
  doLogin() {
    console.log("REDIRECIÓN ", this.loginData);
    this.router.navigate(["pages", "dashboard", "business"]).then();
    /* //Sample service request
     let params = [{
       "param": "value"
     },{
       "param2": "value2"
     },];
     this.service.getData(params).subscribe({
       next: (result) => {
         console.log(result);
       },
       error: (error) => {
         console.log(error)
       }
     });*/
  }

}
