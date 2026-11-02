import{readFileSync,statSync}from'node:fs';import vm from'node:vm';
new vm.Script(readFileSync('dist/app.js','utf8'));for(const p of ['index.html','style.css','app.js','worksheet-A.pdf',...Array.from({length:6},(_,i)=>`audio/A${i+1}.mp3`)])if(statSync('dist/'+p).size<100)throw Error('Missing or empty asset: '+p);console.log('Website, worksheet and all six audio files are ready.');
