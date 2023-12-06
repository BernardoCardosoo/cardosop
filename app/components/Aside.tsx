import { Button } from "@/components/ui/button";
import { Bars4Icon, HomeIcon, ListBulletIcon, NewspaperIcon } from "@heroicons/react/24/outline";

export default function Aside() {
    return (
        <>

            <div className="w-1/4 border-r">
                <div>
                    <h2>Configurações</h2>
                    <a href="/admin">
                        <Button variant="ghost">
                            <HomeIcon className="h-4 mr-2" />
                            Página inicial
                        </Button>
                    </a>
                    <br />

                    <a href="/admin/course">
                        <Button variant="ghost">
                            <Bars4Icon className="h-4 mr-2" />
                            Lista de professores
                        </Button>
                    </a>
                    <br />
                    <a href="/admin/course/new">
                        <Button variant="ghost">
                            <NewspaperIcon className="h-4 mr-2" />
                            Cadastrar Professor
                        </Button>
                    </a>
                </div>
            


    
        </div>
        </>




    )
}