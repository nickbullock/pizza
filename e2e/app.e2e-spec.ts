import { PizzacounterPage } from './app.po';

describe('pizzacounter App', () => {
  let page: PizzacounterPage;

  beforeEach(() => {
    page = new PizzacounterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
