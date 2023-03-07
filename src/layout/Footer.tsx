import styled from "styled-components";

/**
 * @description
 * @returns
 */
type Props = {
    title: string;
};

const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
`;

function Footer({ title }: Props) {
    return (
        <FooterContainer>
            <h1>{title}</h1>
        </FooterContainer>
    );
}

export default Footer;
