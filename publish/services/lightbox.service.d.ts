import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/skip';
import { DoomService } from './doom.service';
import { Item } from '../models/item';
export declare class LightboxService {
    private readonly _doomService;
    constructor(_doomService: DoomService);
    addItem(item: Item): void;
    openItem(item: Item): void;
    removeItem(item: Item): void;
    onClosed(func: () => void): void;
    onOpening(func: () => void): void;
}
