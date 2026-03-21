async function search() {
  const res = await fetch("https://html.duckduckgo.com/html/?q=linkedin+baraka+michael+bukavu");
  const text = await res.text();
  const matches = text.match(/https:\/\/[a-z]{2,3}\.linkedin\.com\/in\/[a-zA-Z0-9_-]+/g);
  console.log(matches);
}
search();
