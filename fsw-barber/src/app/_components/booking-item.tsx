import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const BookingItem = () =>{
    return (
        <>
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
              <AvatarImage src="">
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
        </>
    )
}

export default BookingItem