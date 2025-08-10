import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Device, DeviceCreateDTO, DeviceUpdateDTO } from '../models/device.model';

/**
 * Serviço responsável pela comunicação com a API de dispositivos IoT
 * Implementa todas as operações CRUD necessárias
 */
@Injectable({
    providedIn: 'root'
})
export class DeviceService {
    // URL base da API - configurar conforme o ambiente
    private readonly apiUrl = 'http://localhost:8080/api/devices';

    constructor(private http: HttpClient) { }

    /**
     * Busca todos os dispositivos
     * @returns Observable com array de dispositivos
     */
    getAllDevices(): Observable<Device[]> {
        return this.http.get<Device[]>(this.apiUrl).pipe(
            catchError((error) => {
                console.error('Erro ao buscar dispositivos:', error);
                // Retorna array vazio se o backend não estiver disponível
                return of([]);
            })
        );
    }

    /**
     * Busca um dispositivo por ID
     * @param id ID do dispositivo
     * @returns Observable com o dispositivo encontrado
     */
    getDeviceById(id: number): Observable<Device> {
        return this.http.get<Device>(`${this.apiUrl}/${id}`).pipe(
            catchError((error) => {
                console.error('Erro ao buscar dispositivo:', error);
                throw error;
            })
        );
    }

    /**
     * Cria um novo dispositivo
     * @param device Dados do dispositivo para criação
     * @returns Observable com o dispositivo criado
     */
    createDevice(device: DeviceCreateDTO): Observable<Device> {
        return this.http.post<Device>(this.apiUrl, device).pipe(
            catchError((error) => {
                console.error('Erro ao criar dispositivo:', error);
                throw error;
            })
        );
    }

    /**
     * Atualiza um dispositivo existente
     * @param id ID do dispositivo
     * @param device Dados para atualização
     * @returns Observable com o dispositivo atualizado
     */
    updateDevice(id: number, device: DeviceUpdateDTO): Observable<Device> {
        return this.http.put<Device>(`${this.apiUrl}/${id}`, device).pipe(
            catchError((error) => {
                console.error('Erro ao atualizar dispositivo:', error);
                throw error;
            })
        );
    }

    /**
     * Remove um dispositivo
     * @param id ID do dispositivo
     * @returns Observable da operação de remoção
     */
    deleteDevice(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
            catchError((error) => {
                console.error('Erro ao deletar dispositivo:', error);
                throw error;
            })
        );
    }
}
