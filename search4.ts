async function search() {
  const res = await fetch("https://api.github.com/users/barakamichaelklg-code");
  const data = await res.json();
  console.log(data);
}
search();
