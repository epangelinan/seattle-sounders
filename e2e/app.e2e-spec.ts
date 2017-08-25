import { SeattleSoundersPage } from './app.po';

describe('seattle-sounders App', () => {
  let page: SeattleSoundersPage;

  beforeEach(() => {
    page = new SeattleSoundersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
