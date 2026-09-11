export interface MovieCompType{
    "id": number,
    "title": string,
    "genre": string,
    "year": number,
    "description": string,
    "rating": number
    fav: (id: number) => void;
}

export type MovieType = Omit<MovieCompType, "fav">;
