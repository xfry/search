/**
 * @type {Object}
 * [an option object for passing to fetch]
  {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }
*/

class Request {
  static xhr(options) {    
    /**
     * [Make a petition for dog-list.json file]
     * @return { promise } [Fetch returns a promise]
     */
    return fetch(options.url, options)
      .then(response => {
        response.status     //=> number 100–599
        response.statusText //=> String
        response.headers    //=> Headers
        response.url        //=> String
        
        if(response.status != 200) {
          return {
            error: response.statusText
          }
        } else {
          return response.text()
        }

      }, (error) => {
        error.message //=> String
        console.error('The request has failed: ', error.message);
      });
  }
}

export default Request;