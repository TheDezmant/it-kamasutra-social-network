import styled from "@emotion/styled";

const StyledCatalog = styled.div`
    width: 100px;
    background-color: lightcoral;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 300px;
    padding-top: 20px;

    & > a {
        color: white;
        text-decoration: none;
    }
    & > a.active {
        color: gold;
    }
`;

export { StyledCatalog };
