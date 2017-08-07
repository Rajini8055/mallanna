  function sanitize(strings,...values){
    const dirty = strings.reduce((prev, next, i) => {
      return `${prev}${next}${values[i] || ''}`;
    },'');
  // return dirty;
   return DOMPurify.sanitize(dirty);
  }

  const first = 'mallanna';
  const aboutMe = sanitize`This is the HTML to sanitize the alert call
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1-NNfLpNtsFQY25z7A4u9pp2D_vJHTNU70RDupydx4i7BrMKYw"
                    height="100" width="100" onload="alert('you are hacked');" />`;

  const html =`
  <h3>${first}</h3>
  <p>${aboutMe}</p>
  `;
  const bio = document.querySelector('.bio');
  bio.innerHTML = html;
