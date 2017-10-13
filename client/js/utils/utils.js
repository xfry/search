class Utils {
  constructor() {
  }

  static cutString(text, since, to) {
    if(text) {
      return (text.length > since ? text.substr(0, to ) + '... ' : text );
    } else {
      return "";
    }
  }
}

export default Utils;