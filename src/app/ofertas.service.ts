import { Oferta } from "./shared/oferta.model"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

import { URL_API } from "./app.api"
import { URL_API2 } from "./app.api"
import { URL_API3 } from "./app.api"

import 'rxjs'

@Injectable()
export class OfertasService {

    //private url_api = 'http://localhost:3000/ofertas'

    constructor (private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    }
    
    getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)

    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0]
            })
    } 

    public getComoUsarPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API2}?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

    public getOndeFicaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API3}?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

}
