import { Song } from './song';
import { Artist } from './Artist';

export class Album{
    type: string;
    summary: string;
    ratings: string;
    title: string;
    songs: Song[]
    artist: Artist;
}