import styled from "styled-components";

export const AddTaskButton = styled.button`
    background-color: var(--green);
    color: var(--white);
    font-size: .8rem;
    padding: .3rem .5rem;
    border: 1px solid #027353;
    border-radius: .3rem;
    cursor: pointer;

    &::before {
        content: "+";
        margin-right: .3rem;
        font-weight: 700;
    }

    &:hover {
        background-color: var(--light-green);
    }
`