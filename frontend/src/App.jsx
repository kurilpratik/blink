import "./App.css";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function App() {
    return (
        <div className="font-extrabold">
            Home - Blink
            <div className="h-8 w-28 bg-amber-100"></div>
            <Button variant="outline" size={"lg"}>
                Click
            </Button>
            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
}

export default App;
