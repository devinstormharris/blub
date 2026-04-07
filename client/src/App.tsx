import { Route, Switch } from 'wouter'
import Home from './components/Home'
import PhoneView from './components/PhoneView'
import TvView from './components/TvView'

function App() {
  return (
    <>
      <header className="app-header">
        <h1 className="app-title">Blub</h1>
      </header>

      <main className="app-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/room/:code/phone" component={PhoneView} />
          <Route path="/room/:code/tv" component={TvView} />
          <Route>404 - not found</Route>
        </Switch>
      </main>
    </>
  )
}

export default App