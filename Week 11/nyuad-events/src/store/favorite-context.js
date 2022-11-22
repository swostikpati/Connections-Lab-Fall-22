import { createContext, useState } from "react";

//initial contect
let FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});


//function to provide the favorites context to all the components listening to the favorites values
export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(event) {
        setUserFavorites((prev) => {
            //this way we always receive the latest array
            return prev.concat(event);
        });
    }
    function removeFavoritesHandler(eventId) {
        setUserFavorites((prev) => {
            return prev.filter(event => eventId !== event.id)
        })
    }
    function checkFavoritesHandler(eventId) {
        return userFavorites.some(event => eventId === event.id);
        //if atleast one event id matches
    }
    let context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        checkFavorite: checkFavoritesHandler

    };


    return <FavoritesContext.Provider value={context}>
        {props.children};
    </FavoritesContext.Provider>

} // creating a wrapper that would be wrapped around all interested components

export default FavoritesContext;

// whenecer value changes, all listening components are updated
// interested components refers to any components in the screen that will directly be affected by change in the context

