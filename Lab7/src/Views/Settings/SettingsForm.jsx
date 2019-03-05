import React from 'react';
import { Field } from 'redux-form';

const SettingsForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label>Username</label>
        <div>
          <Field
            name='userName'
            component='input'
            type='text'
            disabled
          />
        </div>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name='firstName'
            component='input'
            type='text'
            placeholder='First Name'
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name='lastName'
            component='input'
            type='text'
            placeholder='Last Name'
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name='email'
            component='input'
            type='email'
            placeholder='Email'
          />
        </div>
      </div>
      <div>
        <label htmlFor='contactEmail'>Contact email</label>
        <div>
          <Field
            name='contactEmail'
            id='contactEmail'
            component='input'
            type='checkbox'
          />
        </div>
      </div>
      <div>
        <label htmlFor='contactSMS'>Contact email</label>
        <div>
          <Field
            name='contactSMS'
            id='contactSMS'
            component='input'
            type='checkbox'
          />
        </div>
      </div>
      <div>
        <button type='submit' disabled={ submitting }>
          Submit
        </button>
        <button type='button' disabled={ submitting } onClick={ reset }>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;
