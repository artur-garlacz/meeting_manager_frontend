const pendingLocalStorage: { [id: string]: string } = {};

const localStorageConsentValue = 'yes';
const LOCAL_STORAGE_CONSENT = 'local_storage_consent';

let localStorageConsent: boolean =
  localStorage.getItem(LOCAL_STORAGE_CONSENT) === localStorageConsentValue;

export const getConsentToLocalStorage = (): boolean => {
  return localStorageConsent;
};

export const setConsentToLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_CONSENT, localStorageConsentValue);
  localStorageConsent = true;
  storePendingLocalStorage();
};

const storePendingLocalStorage = () => {
  Object.keys(pendingLocalStorage).forEach((key) => {
    localStorage.setItem(key, pendingLocalStorage[key]);
    delete pendingLocalStorage[key];
  });
};

export const getLocalStorage = (key: string): string => {
  if (localStorageConsent) {
    return localStorage.getItem(key) as string;
  }
  return pendingLocalStorage[key];
};

export const setLocalStorage = (key: string, value: string) => {
  if (localStorageConsent) {
    localStorage.setItem(key, value);
  } else {
    pendingLocalStorage[key] = value;
  }
};

export const removeLocalStorage = (key: string) => {
  if (localStorageConsent) {
    localStorage.removeItem(key);
  } else {
    delete pendingLocalStorage[key];
  }
};
