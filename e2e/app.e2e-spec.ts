import { SoundPage } from './app.po';

describe('sound App', () => {
  let page: SoundPage;

  beforeEach(() => {
    page = new SoundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
