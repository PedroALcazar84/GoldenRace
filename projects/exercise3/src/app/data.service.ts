import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getNumbers(): Observable<number> {
    throw new Error('Method not implemented');
  }
}
