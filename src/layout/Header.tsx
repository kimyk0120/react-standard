/**
 * @description 헤더 컴포넌트
 * @returns
 */

// ? > 필수 여부 체크
type Props = {
    title: string;
    description?: number;
};

function Header({ title, description }: Props) {
    // view
    return (
        <>
            <h1>{title}</h1>
        </>
    );
}

export default Header;
