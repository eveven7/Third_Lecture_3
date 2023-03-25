import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sheep, SheepDetailed } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SheepServiceService {

  constructor(private httpClient: HttpClient) { }
  load() { return this.httpClient.get<Sheep[]>('https://baal.fdp.workers.dev/sheep'); }
  loadSheepDetails(name: string) { return this.httpClient.get<SheepDetailed>('https://baal.fdp.workers.dev/sheep/' + name) };

}