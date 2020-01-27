

const quote = async () => {
  let response = await fetch('http://api.icndb.com/jokes/random/1');
  let quote = await response.json();
  return quote;
}

export default quote;