import { useState } from "react";
import { createContext, useContext } from "react";
import { childrenProps } from "../types";
import { DataContextInterface } from "../types";

const dataInitialState = {
  data: [],
  setData: () => {},
};

export const DataContext =
  createContext<DataContextInterface>(dataInitialState);

export const DataProvider: React.FC<childrenProps> = (props) => {
  const [data, setData] = useState([]);

  const contextValue: DataContextInterface = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextInterface => {
  const context = useContext(DataContext);
  const { data, setData } = context;

  return {
    data,
    setData,
  };
};
