export class RequestKeycloak {
  keycloakUrl: string;
  keycloakRealm: string;
  keycloakClientId: string = 'sdu2-frontend';
  keycloakClientSecret: string = 'f541e548-ff50-4c97-928d-f296fcd7be9c';
  keycloakGrantType: string = 'password';
  keycloakUsername: string;
  keycloakPassword: string;

  constructor(url: string, realm: string, username: string, password: string) {
    this.keycloakUrl = url;
    this.keycloakRealm = realm;
    this.keycloakUsername = username;
    this.keycloakPassword = password;
  }
}
