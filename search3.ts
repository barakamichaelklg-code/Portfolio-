async function search() {
  const res = await fetch("https://www.google.com/search?q=linkedin+baraka+michael+bukavu", {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
  });
  const text = await res.text();
  const matches = text.match(/linkedin\.com\/in\/[a-zA-Z0-9_-]+/g);
  console.log(matches);
}
search();
