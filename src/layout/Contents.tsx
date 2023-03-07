import styled from "styled-components";

/**
 * @description
 * @returns
 */
type Props = {
    title: string;
};

const ContentsContainer = styled.main`
    height: 100%;
    background-color: #ffffff;
`;

function Contents(props: Props) {
    return (
        <ContentsContainer>
            <h1>{props.title}</h1>
        </ContentsContainer>
    );
}

export default Contents;
