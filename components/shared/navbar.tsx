import { HouseIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { fraunces } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <header className="flex justify-between items-center border border-b-border w-full px-36 py-4">
      <Link href="/" className="flex items-center gap-2 pl-2 pr-4">
        <div className="p-2 bg-primary text-primary-foreground rounded-md">
          <HouseIcon size={24} />
        </div>
        <div className="flex flex-col items-start gap-1">
          <h1 className={cn(fraunces.className, "text-xl font-bold")}>Logo</h1>
          <span className="text-xs text-muted-foreground font-semibold">
            RT 04 RW 02
          </span>
        </div>
      </Link>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Button variant="ghost">
              <Link href="#">Beranda</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="#">Fitur</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="#">Modul</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="#">FAQ</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="#">Kontak</Link>
            </Button>
          </li>
        </ul>
      </nav>

      <div className="space-x-2">
        <Button variant="outline">Sign-in</Button>
        <Button variant="default">Register</Button>
      </div>
    </header>
  );
}

export default Navbar;
