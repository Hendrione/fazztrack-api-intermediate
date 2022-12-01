import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homePage extends Page {
    /**
     * define selectors using getter methods
     */
     get btnLogout () { return $('[onclick="logOut()"]') }
     get btnLogoutFailedAsser () { return $('[onclick="logOutt()"]') }

     assertLogoutLinkText() {
        return expect(this.btnLogout).toBeDisplayed();
     }
     
     failedAssertLogoutLinkText() {
      return expect(this.btnLogoutFailedAsser).toBeDisplayed();
   }
}

export default new homePage();
