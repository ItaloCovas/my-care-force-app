import { ComponentProps, forwardRef } from "react";
import { cn } from "../../shared/utils/cn";
import { MdOutlineErrorOutline } from "react-icons/md";

interface InputProps extends ComponentProps<"input"> {
  name?: string;

  error?: string;

  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, label, id, error, className, type, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <label className="">{label}</label>
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          type={type}
          placeholder={placeholder}
          className={cn(
            "bg-zinc-50 w-full rounded-lg border border-gray-500 px-3 h-[48px] text-gray-800  focus:border-[#4062F9] transition-all outline-none mt-1 placeholder:text-gray-400",
            error && type !== "file" && "!border-red-500",
            className
          )}
        />
        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-500">
            <MdOutlineErrorOutline className="h-4 w-4 mt-[2px]" />
            <span className="text-xs">{error}</span>{" "}
          </div>
        )}
      </div>
    );
  }
);
