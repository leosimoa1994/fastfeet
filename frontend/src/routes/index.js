import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Signin from '~/pages/Signin';

import Deliverymans from '~/pages/Deliverymans';
import AddDeliveryman from '~/pages/Deliverymans/AddDeliveryman';
import EditDeliveryman from '~/pages/Deliverymans/EditDeliveryman';

import Order from '~/pages/Order';
import Addorder from '~/pages/Order/Addorder';
import Editorder from '~/pages/Order/Editorder';

import Recipients from '~/pages/Recipients';
import AddRecipients from '~/pages/Recipients/AddRecipients';
import EditRecipient from '~/pages/Recipients/EditRecipient';

import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />

      <Route path="/order" exact component={Order} isPrivate />
      <Route path="/addorder" exact component={Addorder} isPrivate />
      <Route path="/editorder" exact component={Editorder} isPrivate />

      <Route path="/deliverymans" exact component={Deliverymans} isPrivate />
      <Route
        path="/add_deliverymans"
        exact
        component={AddDeliveryman}
        isPrivate
      />
      <Route
        path="/edit_deliverymans"
        exact
        component={EditDeliveryman}
        isPrivate
      />

      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/add_recipients" exact component={AddRecipients} isPrivate />
      <Route
        path="/edit_recipients"
        exact
        component={EditRecipient}
        isPrivate
      />

      <Route path="/Problems" exact component={Problems} isPrivate />
    </Switch>
  );
}
