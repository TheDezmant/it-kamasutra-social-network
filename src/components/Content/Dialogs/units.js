import styled from "@emotion/styled";

const StyledDialogs = styled.div`
    background-color: lightblue;
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const DialogsItem = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    user-select: none;
    & > :active {
        color: red;
    }
`;
const Messages = styled.div`
    display: flex;
    flex-direction: column;
`;

export { StyledDialogs, DialogsItem, Messages };
