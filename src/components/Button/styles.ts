import styled from 'styled-components';
import { IButtonProps } from './types';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    border: 1px solid #2683DB;
    border-radius: 21px;
    &:hover {
        background-color: #32AA1F; 
        cursor:pointer;
    }
`