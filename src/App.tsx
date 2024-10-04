import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';

import './css-global/style.global.css';
import './css-global/media.css';

import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PageMain } from './shared/components/PageMain';
import { PageCatalog } from './shared/components/PageCatalog';
import { PageItem } from './shared/components/PageItem';
import { DisplayWidthTester } from './utils/js/DisplayWidthTester';

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
          <DisplayWidthTester />
        </BrowserRouter>
      )}
    </>
  );
}

export const App = hot(() => <Applic />);

// TODO: добавить логотип + вспомнить сборку + проверить адаптив междоу брейк поинтами

// TODO: возможно добавить редиректы + 404. В клиенту + в сервер
// Разобраться с серверной частью на express.
