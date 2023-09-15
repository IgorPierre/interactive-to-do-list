import styled from "styled-components";

export const DefaultButton = styled.button`
    background-color: ${props => props.primary ? "var(--green)" : "var(--gray)"};
    color: var(--white);
    font-size: 1rem;
    padding: .3rem .5rem;
    border: 1px solid var(--green);
    border-radius: .3rem;
    cursor: pointer;
    transition: .8s;

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