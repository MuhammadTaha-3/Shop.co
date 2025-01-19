"use client"
import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button"

import {
  Sheet,

  SheetContent,
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import Link from "next/link";
import { NavigationMenuDemo } from "./NavigationMenu";

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button >
            <IoMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.co</SheetTitle>
              <ul className=" ">
        <li className="gap-y-4 grid grid-cols-1">
          <Link href="#">
          <NavigationMenuDemo/>
             </Link>
            <Link className="ml-3 text-start" href="#onsale">On Sale</Link>
            <Link className="ml-3 text-start" href="#newarrivals">New Arrivals</Link>
            <Link className="ml-3 text-start" href="#brands">Brands</Link>
          
        </li>
      </ul>

            </SheetHeader>
            
           
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
