
import { Button } from "@mui/material";
import Link from "next/link";

export default async function Home() {

  return (
    <main >
      <Link href="/sets">
        <Button variant="contained">Sets</Button></Link>


    </main>
  );
}
