import styled from "styled-components";

// ? > 필수 여부 체크
type Props = {
    title: string;
    description?: number;
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: #a6f78b;
`;

/**
 * @description 헤더 컴포넌트
 */
function Header({ title, description }: Props) {
    // view
    return (
        <HeaderContainer>
            <h1>{title}</h1>
        </HeaderContainer>
    );
}

export default Header;
