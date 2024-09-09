import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {RequestKeycloak} from "../domain/request-keycloak";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestKeycloakService {

  constructor(private http: HttpClient) {}

  getAcessToken(requestKeycloak: RequestKeycloak) :Observable<any>{
    /* Construindo URL da request para o keycloak */
    const KEY_URL = `${requestKeycloak.keycloakUrl}` +
      `/realms/${requestKeycloak.keycloakRealm}` +
      `/protocol/openid-connect/token`;

    /* Construindo BODY da request para o keycloak */
    const BODY = new HttpParams()
      .set('client_id', requestKeycloak.keycloakClientId)
      .set('client_secret', requestKeycloak.keycloakClientSecret)
      .set('grant_type', requestKeycloak.keycloakGrantType)
      .set('username', requestKeycloak.keycloakUsername)
      .set('password', requestKeycloak.keycloakPassword);

    /* Construindo HEADERS da request para o keycloak */
    const HEADER = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(KEY_URL,BODY,{headers: HEADER});
  }

}
