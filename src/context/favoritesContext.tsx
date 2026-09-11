import { useContext, createContext, useState, type ReactNode, Children } from "react";
import Favorites from "../components/Favorites";


type FavoritesContextType = {
    favorites: string[];
    addFavorite: (title:string) => void;
    deleteFav: (title: string) => void;
}

const favoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesPropType {
    children: ReactNode;
}

export const FavoritesProvider = ({children}: {children:ReactNode}) => {
    const [favoritesCount, setFavoritesCount] = useState<string[]>([]);

    function addFavorite(title:string){
        setFavoritesCount(prev => {
            if(prev.includes(title)) {
                // Ha már benne van, kiszűrjük (eltávolítjuk)
                return prev.filter(favTitle => favTitle !== title);
            } else {
                // Ha nincs benne, hozzáadjuk az új címet a tömbhöz
                return [...prev, title];
            }
        });
    }
    function deleteFav(title: string){
            setFavoritesCount(prev => prev.filter(t => t !== title))
    }

    return(
        <favoritesContext.Provider value={{favorites: favoritesCount , addFavorite, deleteFav }}>
            {children}
        </favoritesContext.Provider>
    );
} 


    export const useFavorites = () => {
        const context = useContext(favoritesContext);
        if(!context) throw new Error("Missing provider");
        return context;
    }