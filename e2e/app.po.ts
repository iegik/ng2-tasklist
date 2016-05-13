export class NgTasklistPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-tasklist-app h1')).getText();
  }
}
