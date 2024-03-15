// Promises, async/await
// resolve quer dizer que a promessa foi cumprida
// reject quer dizer que a promessa foi rejeitada

async function searchGithubUser() {
  try {
    const response = await fetch('https://api.github.com/users/angelalvess');
    const data = await response.json();

    return data.name; // retorna o nome do usuário, se não encontrar retorna undefined

    // console.log(data);
  } catch (error) {
    console.log('Usuário não encontrado');
  } finally {
    console.log('Sempre será executado');
  }
}

searchGithubUser().then((name) => console.log(name));
