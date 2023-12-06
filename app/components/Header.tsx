export default function Header() {
    return (
        <header className="text-center text-white py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4>CADASTRO DE PROFESSORES📘</h4>
            <nav>
                
                <a className="hover:text-[#00e77f]" href="#">
                    Professores &nbsp;
                </a>
               
                <a className="hover:text-[#00e77f]" href=" /admin">
                    Login &nbsp;
                </a>
            </nav>
        </header>
    )
}