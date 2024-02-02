
import github from "./db";
import { useEffect, useState, useCallback } from "react";
import query from './Query';
import RepoInfo from './components/RepoInfo';
function App() {
  let [userName, setUserName] = useState('');
  let [repoList, setRepoList] = useState(null);
  const fetchData = useCallback(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(query)
    })
      .then(response => response.json())
      .then(data => {
        const viewer = data.data.viewer;
        setUserName(viewer.name);
        const repos = data.data.search.nodes;
        setRepoList(repos);
      })
      .catch((error) => {
        console.log('error', error);
      })
  }, [])
  useEffect(() => {
    fetchData();
  }, [fetchData])
  return (
    <div className="App container mt-5">
      <h1 className='text-primary'><i className='bi bi-diagram-2-fill'> Repos</i></h1>
      <p>Welcome to {userName}'s gitHub please see below repoList</p>
      {
        repoList && (
          <ul className="list-group list-group-flush">
            {
              repoList.map((repo) => (
                <RepoInfo key={repo.id.toString()} repo={repo} />
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default App;
