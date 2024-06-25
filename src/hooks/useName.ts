import { useContext } from "react";
import { Contexto } from "../contexts/Contexto";

const useName = () => {
  const { names, setColumn, create, remove } = useContext(Contexto);

  const list = async (column: string) => {
    try {
      setColumn(column);
    } catch (error) {
      console.error("Erro ao definir coluna:", error);
    }
  };

  return {
    names,
    setColumn,
    create,
    remove,
    list,
  };
};

export default useName;
