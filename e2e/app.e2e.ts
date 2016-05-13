import { NgTasklistPage } from './app.po';

describe('ng-tasklist App', function() {
  let page: NgTasklistPage;

  beforeEach(() => {
    page = new NgTasklistPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-tasklist works!');
  });
});
