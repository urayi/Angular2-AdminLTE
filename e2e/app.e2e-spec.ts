import { SpartaGuiPage } from './app.po';

describe('Sparta GUI App', () => {
  let page: SpartaGuiPage;

  beforeEach(() => {
    page = new SpartaGuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Título subtítulo');
  });
});
