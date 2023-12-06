import UploadButton from "@/app/components/UploadButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sql } from "@vercel/postgres";


export const revalidate =0

export default function NewCourse({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveCourse(formData: FormData){
        "use server"
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        await sql`INSERT INTO courses (title, description,url) VALUES(${title}, ${description}, ${urlImage})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className=" text-center text-4xl">Cadastrar Professores</h1>
            <form>
                <Input type="text" name="title" placeholder="Digite o nome do professor"/><br/>
                <Input type="text" name="description" placeholder="Digite o email do professor"/> <br/>
                <br/>
                <UploadButton /> <br/>
                <Button formAction={saveCourse} className="text-white">Salvar</Button>
            </form>
        </div>

    )
}