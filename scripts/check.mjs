import{readFileSync,statSync}from'node:fs';import vm from'node:vm';import assert from'node:assert/strict';
new vm.Script(readFileSync('dist/app.js','utf8'));new vm.Script(readFileSync('dist/data.js','utf8'));
const lessons=JSON.parse(readFileSync('dist/lessons.json','utf8'));assert.deepEqual(lessons.map(l=>l.number),[1,2,4,5,6,8]);assert.equal(lessons.flatMap(l=>l.words).length,53);assert.equal(new Set(lessons.flatMap(l=>l.words.map(w=>w.id))).size,53);
for(const p of ['index.html','style.css','app.js','data.js','worksheets-all.pdf',...lessons.flatMap(l=>[l.worksheet,...l.words.map(w=>w.audio)])])if(statSync('dist/'+p).size<100)throw Error('Missing or empty asset: '+p);
console.log('Six lessons, 53 audio files and seven worksheets verified.');
