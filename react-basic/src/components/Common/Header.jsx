function Header({ isDarkMode, setIsDarkMode }) {
    return (
        <header>
            header
            <button onClick={() => setIsDarkMode((prev) => !prev)}>
                {isDarkMode ? "라이트 모드" : "다크 모드"}
            </button>
        </header>
    );
}

export default Header;
