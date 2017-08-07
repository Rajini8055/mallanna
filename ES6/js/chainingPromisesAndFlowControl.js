const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];
  const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];

  function getPostById(id){
    return new Promise((resolve, reject)=>{
      //finding the post we want
      const post = posts.find(p => p.id === id);

      if(post){
        resolve(post); //send the post back
      }else{
        reject(Error('no posts were found'));
      }
    });
  }

  function hydrateAuthor(post){
    return new Promise((resolve, reject)=>{
      //finding the author we want
        const authorDetails = authors.find(person => person.name === post.author);
        // "hydrate" the author with the post.author
        if(authorDetails){
          post.author = authorDetails;
          resolve(post);  //send back the author
        }else{
          reject(Error('no author found'));
        }
    });
  }

  getPostById(2)
      .then(pp =>{ return hydrateAuthor(pp);    //local pp refers post object
    })
    .then(pp => { console.log(pp);
    });
