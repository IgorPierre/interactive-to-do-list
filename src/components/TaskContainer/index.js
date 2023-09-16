import styled from "styled-components";

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;

    .not-found-area {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        margin-top: 4rem;
    }
    .not-found-area > span {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 500;

        & svg {
            color: #F2B705;
            margin-right: .5rem;
        }
    } 

    @media(max-width: 1020px) {
        width: 80%;
    }
`