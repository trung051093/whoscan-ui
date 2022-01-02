import cookies from '../common/constants/cookies';

export class CookieServices {
  static setCookie(key: string, value: string, expire: number) {
    const cookie = `${key}=${value};expires=${new Date(
      expire * 100000,
    ).toUTCString()};path=/;Domain=${window.location.hostname};`;
    document.cookie = cookie;
  }

  static getCookie(key: string): string {
    const name = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  static deleteCookie(key: string) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;Domain=${window.location.hostname};`;
  }

  static getAccessToken() {
    return this.getCookie(cookies.ACCESS_TOKEN);
  }

  static deleteTokens() {
    this.deleteCookie(cookies.ACCESS_TOKEN);
    this.deleteCookie(cookies.REFRESH_TOKEN);
  }
}
