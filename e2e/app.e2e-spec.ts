import { VdayPage } from './app.po';

describe('vday App', function() {
  let page: VdayPage;

  beforeEach(() => {
    page = new VdayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
