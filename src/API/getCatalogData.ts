import { mockoon } from "./client";

export const getCatalogData = async () => {
  const { content = null } = await mockoon
    .get("/item/")
    .then((responce) => responce.data);
  return content;
};
