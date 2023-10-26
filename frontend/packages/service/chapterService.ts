import { axiosClient } from "./axios";

export interface ChapterData {
  id: string;
  name: string;
  level: number;
  parent_id: string;
  content: string;
}

export const getChapters = async () => {
  const response = await axiosClient.get("/data");
  return response.data.content.document as ChapterData[];
};
