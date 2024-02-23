import { createContext } from "react";
import { ListContextInterface } from "./interface";

const defaultState = {}

export const ListContext = createContext<ListContextInterface>(defaultState)