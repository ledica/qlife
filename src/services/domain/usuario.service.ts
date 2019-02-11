import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Usuario } from "../../models/usuario";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../storage.service";

@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByEmail(email: string): Observable<Usuario> {
        return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/api/v1/usuario/email?value=${email}`);
    }

    getImageFromPerfilPessoal(id : string) : Observable<any> {
        let url = `${API_CONFIG.baseUrl}/api/v1/usuario/${id}/perfil/pessoal/avatar`
        return this.http.get(url, {responseType : 'blob'});
    }
}