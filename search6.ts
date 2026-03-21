async function search() {
  const res = await fetch("https://api.github.com/repos/barakamichaelklg-code/mon-vrai-portfolio/contents/src/App.tsx");
  const data = await res.json();
  if (data.content) {
    const text = Buffer.from(data.content, 'base64').toString('utf-8');
    const matches = text.match(/linkedin\.com\/in\/[a-zA-Z0-9_-]+/g);
    console.log("mon-vrai-portfolio:", matches);
  }
  
  const res2 = await fetch("https://api.github.com/repos/barakamichaelklg-code/Portfolio-/contents/src/App.tsx");
  const data2 = await res2.json();
  if (data2.content) {
    const text2 = Buffer.from(data2.content, 'base64').toString('utf-8');
    const matches2 = text2.match(/linkedin\.com\/in\/[a-zA-Z0-9_-]+/g);
    console.log("Portfolio-:", matches2);
  }
}
search();
