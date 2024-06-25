import React from "react";
import styled from "styled-components";
import useName from "../../hooks/useName";
import { NameProps } from "../../types";

const ListContainer = styled.div`
  margin-top: 1px;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const NamePart = styled.span`
  &:hover {
    color: red;
  }
`;

const List: React.FC = () => {
  const { names, setColumn, remove } = useName();

  // Função para lidar com cliques esquerdos
  const handleClickLeft = (part: "firstname" | "lastname") => {
    setColumn(part);
  };

  const handleClickRight = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    // Encontrar o nome pelo id na lista de names
    const nameToRemove = names.find((name) => name.id === id);
    if (nameToRemove) {
      remove(nameToRemove); // Chamar a função remove com o objeto NameProps
    }
  };

  return (
    <ListContainer>
      <h2>Nomes Cadastrados:</h2>
      <ul>
        {names.map((name: NameProps) => (
          <ListItem key={name.id}>
            <NamePart
              onClick={() => handleClickLeft("firstname")} // Configuração do clique para firstname
              onContextMenu={(e) => handleClickRight(e, name.id)}
            >
              {name.firstname}
            </NamePart>{" "}
            <NamePart
              onClick={() => handleClickLeft("lastname")} // Configuração do clique para lastname
              onContextMenu={(e) => handleClickRight(e, name.id)}
            >
              {name.lastname}
            </NamePart>
          </ListItem>
        ))}
      </ul>
    </ListContainer>
  );
};

export default List;
