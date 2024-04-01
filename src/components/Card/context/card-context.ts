import { createContext, useContext } from "react";

const CardContext = createContext(false);

export const useCardContext = () => useContext(CardContext);

export const CardProvider = CardContext.Provider;
