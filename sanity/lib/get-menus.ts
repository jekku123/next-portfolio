import { getMenu } from './client';

export async function getMenus() {
  const [{ items: main }, { items: social }] = await Promise.all(
    ['main-menu', 'social-menu'].map((menu) => getMenu(menu))
  );

  return {
    main,
    social,
  };
}
