import { SocialButtonProps } from "@/types";
import IconArrowRightUp from "./shared/icons/arrow-right-up";

import Link from "next/link";

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      passHref
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
    >
      {children}
      <IconArrowRightUp />
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      <SocialButton href="https://space.bilibili.com/492203970">
        <div className="flex flex-row items-center">
          <span className="ml-3">Bilibili</span>
        </div>
      </SocialButton>
      <SocialButton href="https://github.com/JUZICN">
        <div className="flex flex-row items-center">
          <span className="ml-3">Github</span>
        </div>
      </SocialButton>
      <SocialButton href="mailto:i@juz1.cn">
        <div className="flex flex-row items-center">
          <span className="ml-3">Mail</span>
        </div>
      </SocialButton>
    </div>
  );
}
