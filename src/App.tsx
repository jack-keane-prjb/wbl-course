import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';

import './css-global/style.global.css';
import './css-global/media.css';

import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PageMain } from './shared/PageMain';
import { PageCatalog } from './shared/PageCatalog';
import { PageItem } from './shared/PageItem';

function Applic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <BrowserRouter>
          <Switch>
            <Route path="/catalog/sofas/straight/d-31">
              <PageItem />
            </Route>
            <Route path="/catalog">
              <PageCatalog />
            </Route>
            <Route path="/">
              <PageMain />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export const App = hot(() => <Applic />);

// TODO: возможно добавить редиректы + 404. В клиенту + в сервер
// Разобраться с серверной частью на express.
