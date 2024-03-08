import { getMenu } from "./client";

export async function getMenus() {
  const [{ items: social }] = await Promise.all(
    ["social-menu"].map((menu) => getMenu(menu)),
  );

  return {
    social,
  };
}
