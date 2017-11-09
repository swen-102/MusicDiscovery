import { Song } from './Song';
import { Artist } from './Artist';

export class Album{
    type: string;
    _id: string;
    summary: string;
    ratings: string;
    title: string;
    songs: Song[]
    artist: Artist;
}