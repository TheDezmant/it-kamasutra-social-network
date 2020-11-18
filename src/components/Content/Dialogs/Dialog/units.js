import styled from "@emotion/styled";

const StyledDialog = styled.div`
    width: 100px;
    text-align: center;
    margin-bottom: 20px;

    & > a {
        color: black;
        text-decoration: none;
    }
    & > a.active {
        color: gold;
    }
`;

export default StyledDialog;
