import React, { createContext, useEffect, useState } from "react";
import { ContextProps, NameProps } from "../types";
import service from "../service";

export const Contexto = createContext({} as ContextProps);

export const Provider: React.FC<any> = ({ children }) => {
  const [names, setNames] = useState<NameProps[]>([]);
  const [column, setColumn] = useState("firstName");

  useEffect(() => {
    list(column);
  }, [column]);

  const list = async (column: string) => {
    try {
      const fetchedNames = await service.list(column);
      setNames(fetchedNames);
    } catch (error) {
      console.error("Erro ao carregar nomes:", error);
    }
  };

  const create = async (name: NameProps) => {
    try {
      const createdName = await service.create(name);
      setNames([...names, createdName]);
    } catch (error) {
      console.error("Erro ao criar nome:", error);
    }
  };

  const remove = async (name: NameProps) => {
    try {
      await service.remove(name);
      const updatedNames = names.filter((n) => n.id !== name.id);
      setNames(updatedNames);
    } catch (error) {
      console.error("Erro ao remover nome:", error);
    }
  };

  return (
    <Contexto.Provider value={{ names, setColumn, create, remove }}>
      {children}
    </Contexto.Provider>
  );
};
