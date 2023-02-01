import { mockoon } from "./client";

export const getDetailedPageData = async (id: string) => {
  const { content = null } = await mockoon
    .get(`/item/${id}`)
    .then((responce) => responce.data);
  return content;
};
