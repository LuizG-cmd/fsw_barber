"use client"

import { Button } from "./_components/ui/button"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"

import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />


      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Luiz</h2>
        <p>Segunda-feira, 12 de Agosto</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        
      </div>

      
    </div>
  )
}

export default Home
