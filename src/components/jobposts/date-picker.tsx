"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  field,
}: {
  field: { onChange: any; value: any };
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full rounded ">
        <Button
          variant="outline"
          id="date"
          className="w-48 justify-between border-slate-500 font-normal"
        >
          {field.value ? field.value.toLocaleDateString() : "Set closing date"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto text-black dark:text-white overflow-hidden p-0"
        align="start"
      >
        <Calendar
          mode="single"
          selected={field.value}
          captionLayout="dropdown"
          onSelect={(date) => {
            field.onChange(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
