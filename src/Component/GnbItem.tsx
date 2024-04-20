"use client"
import { ROUTE, isParentRoute } from "@/app/routes"
import ChildGnbItem from "./ChildGnbItem"
import ParentGnbItem from "./ParentGnbItem"


export const GnbItem = (route: ROUTE) => {
    if (isParentRoute(route)) return <ParentGnbItem {...route} />
    return <ChildGnbItem {...route} />
}