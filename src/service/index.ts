import axios, { AxiosInstance } from "axios";
import { NameProps } from "../types";

class Service {
  private api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3011",
    headers: {
      "Content-Type": "application/json",
    },
  });

  async list(column: string): Promise<NameProps[]> {
    try {
      const response = await this.api.get(`/list/${column}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao listar nomes:", error);
      throw error;
    }
  }

  async create({ firstname, lastname }: NameProps): Promise<NameProps> {
    try {
      const response = await this.api.get(`/create/${firstname}/${lastname}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar nome:", error);
      throw error;
    }
  }

  async remove({ id }: NameProps): Promise<void> {
    try {
      await this.api.get(`/remove/${id}`);
    } catch (error) {
      console.error("Erro ao remover nome:", error);
      throw error;
    }
  }
}

const service = new Service();
export default service;
