import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <div className="w-full grid sm:grid-cols-1 lg:grid-cols-2  gap-4">
        <div className="flex flex-col  sm:items-center lg:items-start sm:text-center lg:text-start gap-4">
          <p className="font-bold text-[2rem]">
            Do you have any project on mind?
          </p>
          <p className="w-[25rem]">
            We build product close to our herat. We make your idea to reality
            and mako your dream sucessful with awesome experince.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Type your message here." />
        </div>
      </div>
    </>
  );
}
