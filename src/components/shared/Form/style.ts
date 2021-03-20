import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const FormLabel = styled.label`
  color: ${({ theme }) => theme.greyColor};
  padding: 10px;
`;

interface IFormInput {
  isError: boolean;
}

export const FormInput = styled.input<IFormInput>`
  border: 1.5px solid
    ${({ theme, isError }) => (isError ? theme.errorColor : theme.primaryColor)};
  padding: 15px;
  border-radius: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.primaryColor};
  box-shadow: 11px 13px 27px -13px rgba(204, 204, 204, 0.77);
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.errorColor};
  padding: 10px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.fontColor.whiteColor};
  font-size: 16px;
  padding: 15px;
  border-radius: 12px;
  margin-top: 15px;
`;
