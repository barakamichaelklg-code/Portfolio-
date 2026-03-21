async function search() {
  const res = await fetch("https://api.github.com/search/code?q=linkedin+user:barakamichaelklg-code");
  const data = await res.json();
  console.log(data);
}
search();
