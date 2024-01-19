import { UserData } from "../interfaces/userData";
import { api } from "../libs/axios";

export async function getUserData(username: string): Promise<UserData> {
  const response = await api.get(`/users/${username}`);
  console.log(response);
  return response?.data;
}
