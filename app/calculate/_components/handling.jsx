"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

const storings = [
    {
        value: "Handling and Loading",
        label: "Handling and Loading",
        emission: 0.003 // Emission factor in kg CO₂/tonne of coal mined
    },
    {
        value: "Stockpiling and Storage",
        label: "Stockpiling and Storage",
        emission: 0.040
    },
]

export function Handling({ emission, setemission }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between h-[50px]"
                    >
                        {value
                            ? storings.find((storing) => storing.value === value)?.label
                            : "Select the handling method..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0 ">
                    <Command>
                        <CommandInput placeholder="Search handling method..." />
                        <CommandList>
                            <CommandEmpty>Handling method not found.</CommandEmpty>
                            <CommandGroup >
                                {storings.map((storing) => (
                                    <CommandItem
                                        key={storing.value}
                                        value={storing.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                            setemission({ ...emission, handling: storing.emission })
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === storing.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {storing.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {/* <Input type="" value={emission.handling} />  */}
        </div>
    )
}
