import Link from "next/link";
import Image from "next/image";
import { Links } from "@components/Links";
import { APP_NAME } from "@lib/appConfigs";
import { AuthStatus } from "@features/auth";
import { LayoutWrapper } from "@common/LayoutWrapper";

export function Header() {
  return (
    <LayoutWrapper
      className={`sticky top-0 border-b-2 shadow-2xl backdrop-blur-2xl`}
    >
      <header className={`flex items-center justify-between gap-x-2`}>
        <Link href={`/`} title={APP_NAME}>
          <div className={`relative h-8 w-20 md:h-10 md:w-24`}>
            <Image src={`/logos/logo_1.png`} alt={`APP Logo`} fill priority />
          </div>
        </Link>

        <Links />

        <AuthStatus />
      </header>
    </LayoutWrapper>
  );
}
