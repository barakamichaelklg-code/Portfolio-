async function search() {
  const res = await fetch("https://api.github.com/users/barakamichaelklg-code/repos");
  const data = await res.json();
  console.log(data.map(r => r.name));
}
search();
