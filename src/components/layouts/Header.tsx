import Link from "next/link";
import Image from "next/image";
import { Links } from "@components/Links";
import { APP_NAME } from "@lib/appConfigs";
import { AuthStatus } from "@features/auth";
import { LayoutWrapper } from "@components/layouts";

export function Header() {
  return (
    <LayoutWrapper
      className={`hadow-2xl sticky top-0 z-500 border-b-2 backdrop-blur-3xl`}
    >
      <header className={`s flex items-center justify-between gap-x-2`}>
        <Link href={`/`} title={APP_NAME}>
          <div className={`relative h-8 w-20 drop-shadow-md md:h-10 md:w-24`}>
            <Image src={`/logos/logo_1.png`} alt={`APP Logo`} fill />
          </div>
        </Link>

        <Links />

        <AuthStatus />
      </header>
    </LayoutWrapper>
  );
}
