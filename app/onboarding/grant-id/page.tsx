import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VideoGif from "@/public/anya.webp"
import { CalendarCheck2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OnboardingRouteTwo = () => {
  return (
      <div className="min-h-screen w-screen flex items-center justify-center">
        <Card>
            <CardHeader>
                 <CardTitle>You are almost Done!</CardTitle>
                 <CardDescription>We have to now connect to your calender to your account.</CardDescription>
                 <Image src={VideoGif} alt="Almost finished gif" className="w-full h-80 rounded-lg"  />
            </CardHeader>
            <CardContent>
                 <Button className="w-full" asChild>
                    <Link href="/api/auth">
                        <CalendarCheck2 />
                         Connect calender to your account
                    </Link>
                 </Button>
            </CardContent>
        </Card>
      </div>
  )
}

export default OnboardingRouteTwo;
