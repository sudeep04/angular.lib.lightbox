import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/skip';
import { DoomService } from './doom.service';
import { Item } from '../models/item';
import { Position } from '../models/position.interface';

@Injectable()
export class LightboxService {

    constructor(
        private readonly _doomService: DoomService
    ) { }

    public addItem(item: Item): void {

        this._doomService.lightboxComponentRef.instance.addItem(item);
    }

    public openItem(item: Item): void {

        this._doomService.lightboxComponentRef.instance.openItem(item);
    }

    public removeItem(item: Item): void {

        this._doomService.lightboxComponentRef.instance.removeItem(item);
    }

    public onClosed(func: () => void) {

        this._doomService.lightboxComponentRef.instance.$state.filter((state) => state === 'closed').skip(1).first().subscribe(() => {

            func();
        });
    }

    public onOpening(func: () => void) {

        this._doomService.lightboxComponentRef.instance.$state.filter((state) => state === 'opening').first().subscribe(() => {

            func();
        });
    }
}
