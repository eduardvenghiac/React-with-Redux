const quote = async () => {
    // const http = new XMLHttpRequest()

    // http.open("GET", "http://api.icndb.com/jokes/random/1")
    // http.send()

    // http.onload = () => http.responseText;
    // return http.onload();
    // }

        let response = await fetch('http://api.icndb.com/jokes/random/1');
        let quote = await response.json();
        return quote;
      }

export default quote;