import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../Artist'
import { Album } from '../Album'
import { Song } from '../Song'


@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, searchText: string): Array<any> {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            if(it.name)
              return it.name.toLowerCase().includes(searchText);
            else if(it.title)
              return it.title.toLowerCase().includes(searchText);

        });
    }
}
