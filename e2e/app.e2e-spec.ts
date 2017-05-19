import { PracShopPage } from './app.po';

describe('prac-shop App', () => {
  let page: PracShopPage;

  beforeEach(() => {
    page = new PracShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
