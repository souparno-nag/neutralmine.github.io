
"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



export default function CalendarEl({ label, date, setdate }) {
    const [dat, setdat] = React.useState()
    React.useEffect(() => {
        console.log(dat)
        if (label == "from...") {
            setdate({ ...date, from: dat })
        }
        else if (label == "to...") {

            setdate({ ...date, to: dat })
        }
    }, [dat])
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">{dat ? dat.toLocaleDateString() : label}</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Record your emissions</h4>
                        <p className="text-sm text-muted-foreground">
                            Emission start date.
                        </p>
                        <Calendar
                            mode="single"
                            selected={dat}
                            onSelect={setdat}
                            className="rounded-md border"
                        />
                    </div>

                </div>
            </PopoverContent>
        </Popover>
    )
}



