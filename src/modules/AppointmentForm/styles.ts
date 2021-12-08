import styled from 'styled-components';

import { colors } from 'styles';

export const CreateAppointmentForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 104px;
`;

export const StageCreatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 468px;
  gap: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputLabel = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
`;

export const InputText = styled.input`
  width: 624px;
  height: 56px;
  background: ${colors.WHITE};
  border: 1px solid #dce0ec;
  border-radius: 8px;
`;

export const selectStyles = {
  option: (provided: any, state: any): any => ({
    ...provided,
    height: '40px',
    background: state.isSelected ? '#F9FAFF' : 'white',
    borderRadius: '6px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '130%',
    color: colors.BLACK,
  }),
  menuList: (provided: any): any => ({
    ...provided,
    height: '128px',
    overflowY: 'scroll',
  }),
  control: (provided: any): any => ({
    ...provided,
    height: '100%',
  }),
  input: (provided: any): any => ({
    ...provided,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '130%',
  }),
  container: (provided: any): any => ({
    ...provided,
    height: '56px',
    background: '#FFFFFF',
    border: '1px solid #DCE0EC',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 32px rgba(218, 228, 255, 0.16)',
    borderRadius: '8px',
  }),
  indicatorSeparator: (provided: any): any => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided: any): any => ({
    ...provided,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '130%',
  }),
  singleValue: (provided: any): any => ({
    ...provided,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '130%',
  }),
};
