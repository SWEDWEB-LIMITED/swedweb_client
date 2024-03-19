import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerDemo } from "./Date";


export default function page() {
  return (
    <div className="responsive-container h-screen flex flex-col justify-center gap-[4rem]">
      <p className="sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold text-center">
        Let's work together
      </p>

      <div className="flex flex-col gap-4">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <DatePickerDemo/>
        <Textarea placeholder="Type your message here." />
        <Button>Send</Button>
      </div>
    </div>
  );
}
