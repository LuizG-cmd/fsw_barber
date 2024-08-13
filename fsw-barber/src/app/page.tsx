

/*COMPONENTES SHADCN*/ 
import { Button } from "./_components/ui/button"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { Badge } from "./_components/ui/badge"
import { Card, CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"

/* MEUS COMPONENTeS */
import Header from "./_components/header"


/* PRISMA CLIENT */
import { db } from "./_lib/prisma"

import { SearchIcon } from "lucide-react"

import Image from "next/image"
import BarbershopItem from "./_components/barbershop-items"



const Home = async () => {
  
  const barbershops = await db.barbershop.findMany({})


  return (
    <div>

      {/* HEADER */}
      <Header />
      {/* HEADER */}


      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">Olá, Luiz</h2>
        <p>Segunda-feira, 12 de Agosto</p>


        {/* BUSCA */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTO */}
        <h2 className="uppercase p-2 text-xs font-bold text-gray-400 mb-3 mt-6">
          Agendamentos
        </h2>
        <Card className="">
          <CardContent className="flex justify-between p-0">
          {/* ESQUERDA */}
          <div className="flex flex-col gap-5 py-5 pl-5">
            <Badge className="w-fit">
              Confirmado
            </Badge>
            <h3>
              Corte de Cabelo
            </h3>

            <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peterbe.com%2Fplog%2Frandom-avatars-in-django-python&psig=AOvVaw2BmQgstmUOVG7g2QerjaGG&ust=1723644864532000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiyv8-T8ocDFQAAAAAdAAAAABAU">
              </AvatarImage>
            </Avatar>
            <p>
                Barbearia L.G
            </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
            <p className="text-sm">Agosto</p>
            <p className="text-xl">18</p>
            <p className="text-sm">19:15</p>
          </div>
          </CardContent>
        </Card>

        <h2 className="uppercase p-2 text-xs font-bold text-gray-400 mb-3 mt-6">
          Recomendados
        </h2>
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop}/> 
        ))}
      </div> 
    </div>
  )
}

export default Home
