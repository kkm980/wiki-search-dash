"use client"
import Image from 'next/image'
import { theme } from "@/app/theme/theme";
import { Button, useMediaQuery } from "@mui/material";
export default function Home() {
  const isAboveMedium = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Button>
        {isAboveMedium ? (
          <span>bigger than md</span>
        ) : (
          <span>smaller than md</span>
        )}
      </Button>
    </main>
  )
}
