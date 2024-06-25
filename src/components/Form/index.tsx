import React, { useState } from "react";
import styled from "styled-components";
import useName from "../../hooks/useName";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  flex-direction: row;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const { create, list } = useName();

  const handleSave = async () => {
    try {
      // Split no nome para obter firstname e lastname
      const [firstname, ...lastNameArr] = name.split(" ");
      const lastname = lastNameArr.join(" ");

      // Chamada para criar um novo nome
      await create({ id: 0, firstname, lastname });

      // Atualização da lista após a criação
      await list("firstname"); // Deve ser "firstname" de acordo com o backend

      // Limpar o campo após salvar (opcional)
      setName("");
    } catch (error) {
      console.error("Erro ao salvar nome:", error);
    }
  };

  return (
    <FormContainer>
      <Label htmlFor="name">Nome:</Label>
      <Input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleSave}>Salvar</Button>
    </FormContainer>
  );
};

export default Form;
