import {Component} from '@angular/core';
import {RequestKeycloakService} from "../service/request-keycloak.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RequestKeycloak} from "../domain/request-keycloak";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public message: string = '';

  protected formData: FormGroup = new FormGroup({
    url: new FormControl('https://dev.tre-pa.jus.br/auth'),
    realm: new FormControl('SDU2'),
    username: new FormControl('msouza'),
    password: new FormControl('SenhaSegura@2024')
  });

  constructor(private requestKeycloakService: RequestKeycloakService) {}


  onSubmit() {
    const {url, realm, username, password} = this.formData.value;
    console.log(new RequestKeycloak(url, realm, username, password));
    this.requestKeycloakService
      .getAcessToken(new RequestKeycloak(url, realm, username, password))
      .subscribe(value=> {
        const {access_token} = value;
        this.message = `Access Token: ${access_token}`;
        this.setOpen(true);
        console.log(`Access Token: ${access_token}`);
      });
  }

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
