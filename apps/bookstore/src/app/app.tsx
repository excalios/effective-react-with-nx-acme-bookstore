import { Route, Link, Redirect } from 'react-router-dom';

import { BooksFeature } from '@acme/books/feature';

import {
  GlobalStyles,
  Header,
  NavigationList,
  NavigationItem,
  Main,
} from '@acme/ui';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Route path="/books" component={BooksFeature} />
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Main>
    </>
  );
}

export default App;
