import { api } from "../libs/axios";

export interface UserData {
  name: string;
  email: string;
  location: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
  company: string;
  login: string;
}

export async function getUserData(username: string): Promise<UserData> {
  const response = await api.get(`/users/${username}`);
  console.log(response.data);
  return response?.data;
}
