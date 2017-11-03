import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../Artist'

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: Artist[], searchText: string): Artist[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.name.toLowerCase().includes(searchText);
        });
    }
}