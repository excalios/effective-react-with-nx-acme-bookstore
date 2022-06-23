import { Route, Link, Redirect } from 'react-router-dom';

import { BooksFeature } from '@acme/books/feature';

import {
  GlobalStyles,
  Header,
  NavigationList,
  NavigationItem,
  Main,
} from '@acme/ui';

import { CartFeature } from '@acme/cart/feature';

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
          <NavigationItem>
            <Link to="/cart">Cart</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Route path="/books" component={BooksFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Main>
    </>
  );
}

export default App;
