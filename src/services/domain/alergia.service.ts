import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Alergia } from "../../models/alergia";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AlergiaService {

    constructor(public http: HttpClient) {
    }

    findAll():Observable<Alergia[]>{
        return this.http.get<Alergia[]>(`${API_CONFIG.baseUrl}api/v1/alergia/alls`);
    }
}