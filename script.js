(() => {
 const input=document.getElementById('topicSearch'), cards=[...document.querySelectorAll('.topic-card')], label=document.getElementById('resultsLabel'), empty=document.getElementById('emptyState');
 const normalize=s=>s.normalize('NFKC').toLocaleLowerCase('ka-GE').trim().replace(/\s+/g,' ');
 const apply=()=>{const terms=normalize(input.value).split(' ').filter(Boolean);let visible=0;cards.forEach(card=>{const text=normalize(card.dataset.search+' '+card.textContent);card.hidden=!terms.every(term=>text.includes(term));if(!card.hidden)visible++;});label.textContent=input.value.trim()?`ნაჩვენებია ${visible} თემა`:`${visible} თემა`;empty.hidden=visible!==0;};
 document.getElementById('topicCount').textContent=cards.length; input.addEventListener('input',apply);document.getElementById('resetSearch').addEventListener('click',()=>{input.value='';apply();input.focus();});
 document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus();input.select();}if(e.key==='Escape'&&document.activeElement===input){input.value='';apply();input.blur();}});apply();
})();
