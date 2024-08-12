import Image from "next/image"

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
    return (
        <Card>
            <CardContent className="justify-between items-center flex flex-row">
                <Image alt="logo_barber" src="/logo.png" height={18} width={128}  />
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </CardContent>
        </Card>
    )
}

export default Header