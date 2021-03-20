import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ILoginAccountCredentials } from '../../shared/types';
import * as actions from '../../actions';
import {
  Button,
  ErrorMessage,
  FormGroup,
  FormInput,
  FormLabel,
} from '../../components/shared/Form/style';

interface IValuesErrors {
  email?: string;
  password?: string;
}

const LoginPage: FC = () => {
  const dispatch = useDispatch(); // use to dispach login

  const onSubmit = async (values: ILoginAccountCredentials) => {
    actions.auth.authenticate(values)(dispatch); // redux login auth action
  };

  const authenticateData = useSelector(
    actions.auth.authenticate.resultSelector(),
  ); // get auth data from store (if data exists user is logged in)
  if (authenticateData?.data) {
    return <Redirect to="/" />;
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors: IValuesErrors = {};
        if (!values.email) {
          errors.email = 'form.field.isRequired';
        }

        if (!values.password) {
          errors.password = 'form.field.isRequired';
        }

        return errors;
      }}
      render={({ submitError, handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email">
            {({ input, meta }) => (
              <FormGroup>
                <FormLabel>
                  <FormattedMessage id="form.email.label" />
                </FormLabel>
                <FormInput
                  {...input}
                  isError={meta.error && meta.touched}
                  type="email"
                  placeholder="email"
                />
                {(meta.error || meta.submitError) && meta.touched && (
                  <ErrorMessage>
                    <FormattedMessage id={meta.error || meta.submitError} />
                  </ErrorMessage>
                )}
              </FormGroup>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <FormGroup>
                <FormLabel>
                  <FormattedMessage id="form.password.label" />
                </FormLabel>
                <FormInput
                  {...input}
                  isError={meta.error && meta.touched}
                  type="password"
                  placeholder="Password"
                />
                {meta.error && meta.touched && (
                  <ErrorMessage>
                    <FormattedMessage id={meta.error} />
                  </ErrorMessage>
                )}
              </FormGroup>
            )}
          </Field>
          {submitError && <div className="error">{submitError}</div>}
          <FormGroup>
            <Button type="submit" disabled={submitting}>
              <FormattedMessage id="action.logIn" />
            </Button>
          </FormGroup>
        </form>
      )}
    />
  );
};

export default LoginPage;
