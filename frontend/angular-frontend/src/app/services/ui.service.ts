import { Injectable } from '@angular/core';
import {State} from "../models/State";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  stateSubject: Subject<State> = new BehaviorSubject<State>(State.EDITING);
  constructor() { }
}
