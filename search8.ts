async function search() {
  const res = await fetch("https://api.github.com/repos/barakamichaelklg-code/Michael-klg/readme");
  const data = await res.json();
  if (data.content) {
    const text = Buffer.from(data.content, 'base64').toString('utf-8');
    console.log(text);
  }
}
search();
