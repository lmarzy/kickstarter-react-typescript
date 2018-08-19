import * as React from 'react';
import ContactChoice from './Contact-Choice/Contact-Choice';
import { logicalExpression } from '../../../node_modules/@types/babel-types';
import Form from './Form/Form';

interface ComponentState {
  email: {
    valueOriginal: string;
    value: string;
    checked: boolean;
    edit: boolean,
  };
  tel: {
    valueOriginal: string;
    value: string;
    checked: boolean;
    edit: boolean,
  };
}

export default class ContactChoices extends React.Component<{}, ComponentState> {
  readonly state = {
    email: {
      // valueOriginal: null,
      valueOriginal: 'test@mail.com',
      // value: null,
      value: 'test@mail.com',
      checked: false,
      edit: true,
    },
    tel: {
      // valueOriginal: '07123456789',
      // value: '07123456789',
      valueOriginal: null,
      value: null,
      checked: false,
      edit: true,
    }
  } as ComponentState;

  render() {
    const {email, tel} = this.state;

    return (
      <div>
        <h1>Contact Choices</h1>

        <div className="contactChoice">

          <ContactChoice
            checkbox={<label>
              Email
              <input type="checkbox" id="email" checked={email.checked} onChange={this.handleChecked} />
            </label>}
            form={<Form
              value={email.value}
              id="email"
              type="email"
              handleAddUpdateContact={this.handleAddUpdateContact}
            />}
            valueOriginal={email.valueOriginal}
            value={email.value}
            edit={email.edit}
            checked={email.checked}
          />

          <br/>

          <ContactChoice
            checkbox={<label>
              Tel
              <input type="checkbox" id="tel" checked={tel.checked} onChange={this.handleChecked} />
            </label>}
            form={<Form
              value={tel.value}
              id="tel"
              type="tel"
              handleAddUpdateContact={this.handleAddUpdateContact}
            />}
            valueOriginal={tel.valueOriginal}
            value={tel.value}
            edit={tel.edit}
            checked={tel.checked}
          />

        </div>
      </div>
    );
  }

  private handleChecked = (e: React.FormEvent<HTMLInputElement>): void => {
    const id = e.target.id;

    const newState = { ...this.state[id] };
    newState.checked = !this.state[id].checked;

    this.setState({
      [id]: newState,
    });
  }

  private handleAddUpdateContact = (e: React.FormEvent<HTMLInputElement>): void => {
    const newState = { ...this.state[e.target.id]};

    newState.value = e.target.value;

    this.setState({
      [e.target.id]: newState,
    });
  }
}