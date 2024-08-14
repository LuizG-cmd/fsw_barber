

/*COMPONENTES SHADCN*/ 
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"

/* MEUS COMPONENTES */
import Header from "./_components/header"
import BookingItem from "./_components/booking-item"


/* PRISMA CLIENT */
import { db } from "./_lib/prisma"

/* LUCIDE ICONS */
import { SearchIcon } from "lucide-react"


/* CONSTANTS */
import { quickSearchOption } from "./_constants/search"

import Image from "next/image"
import BarbershopItem from "./_components/barbershop-items"




const Home = async () => {
  
  const barbershops = await db.barbershop.findMany({})
  const popularBarbersshops = await db.barbershop.findMany({})


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


        {/* BUSCA  RAPIDA*/}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOption.map((option) => (
               <Button className="gap-2" variant="secondary" key={option.title}>
               <Image src={option.imageUrl} width={16} height={16} alt={option.title}  />
               {option.title}
             </Button>
          ))}
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

        <BookingItem />

        <h2 className="uppercase p-2 text-xs font-bold text-gray-400 mb-3 mt-6">
          Recomendados
        </h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbersshops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/> 
          ))}
          </div>


        <h2 className="uppercase p-2 text-xs font-bold text-gray-400 mb-3 mt-6">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/> 
          ))}
        </div>
      </div> 

      <Card className="mt-3">
          <CardContent className="py-6 p-5">
              <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
              </p>
          </CardContent>
        </Card>
    </div>
  )
}

export default Home
