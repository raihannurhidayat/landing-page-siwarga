import { HouseIcon } from "lucide-react";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <header className="flex justify-between items-center border border-b-border w-full px-36 py-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary text-primary-foreground rounded-md">
          <HouseIcon />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1>Logo</h1>
          <span>name</span>
        </div>
      </div>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <a href="#">Beranda</a>
          </li>
          <li>
            <a href="#">Fitur</a>
          </li>
          <li>
            <a href="#">Modul</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Kontak</a>
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
