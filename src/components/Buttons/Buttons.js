import styled from "styled-components"

export const DefaultButton = styled.button`
    background-color: ${props => props.primary ? "var(--green)" : "var(--gray)"};
    color: var(--white);
    font-size: 1rem;
    padding: .3rem .5rem;
    margin-left: 1rem;
    border: 1px solid var(--green);
    border-radius: .3rem;
    cursor: pointer;
    transition: .4s;

    &::before {
        content: "${props => props.customContent || ''}";
        margin-right: .3rem;
        font-weight: 700;
    }

    &:hover {
        box-shadow: inset 150px 0 var(--white);
        color: var(--green);
    }
`

export const FinishButton = styled.button`
    border: 1px solid var(--dark-blue);
    border-radius: .2rem;
    width: 20px;
    height: 20px;
    margin-right: .5rem;
`

export const TrashButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.4rem;
    color: var(--white);
    
    &:hover {
        color: var(--red);
    }
`