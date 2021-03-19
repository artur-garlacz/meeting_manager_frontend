import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import messagesPl from '../../../messages/pl.json';
import messagesEn from '../../../messages/en.json';

interface ILangProvider {
  children: ReactNode;
}

const LangProvider: React.FC<ILangProvider> = ({ children }: ILangProvider) => {
  const messages = {
    pl: messagesPl,
    en: messagesEn,
  };

  return (
    <IntlProvider
      textComponent={React.Fragment}
      locale="pl" // In next steps language will be dependant on user settings from redux store
      messages={messages.pl}
    >
      {children}
    </IntlProvider>
  );
};

export default LangProvider;
