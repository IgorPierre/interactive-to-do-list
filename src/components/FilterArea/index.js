import styled from "styled-components";

export const FilterArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    margin-bottom: 2rem;

    @media(max-width: 1020px) {
        width: 80%;
    }

    & svg {
        margin-right: .5rem;
    }
`