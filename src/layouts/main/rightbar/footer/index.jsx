import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2">
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"
      >
        Hizmet Şartları
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"
      >
        Gizlilik Politikası
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"
      >
        Çerez Politikası
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"
      >
        İmprint
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"
      >
        Erişilebilirlik
      </Link>
      <Link
        to="/"
        className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"
      >
        Reklam Bilgisi
      </Link>
      <div className="w-full flex gap-2">
        <Popover className="relative outline-none leading-4 inline-flex ">
          <Popover.Button className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline inline-flex items-center">
            Daha fazla
            <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className="w-[150px] grid absolute bottom-0 right-0 max-w-[384px] bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden">
            <Link className="py-3 px-4 text-white text-[15px] hover:bg-[color:var(--background-secondary)] leading-5 font-bold">
              Hakkında
            </Link>
            <Link className="py-3 px-4 text-white text-[15px] hover:bg-[color:var(--background-secondary)] leading-5 font-bold">
              Durum
            </Link>
            <Link className="py-3 px-4 text-white text-[15px] hover:bg-[color:var(--background-secondary)] leading-5 font-bold">
              İşletmeler İçin X
            </Link>
            <Link className="py-3 px-4 text-white text-[15px] hover:bg-[color:var(--background-secondary)] leading-5 font-bold">
              Geliştiriciler
            </Link>
          </Popover.Panel>
        </Popover>
        <p className="text-[color:var(--color-base-secondary)] leading-4 text-[13px]">
          &copy; 2023 MustafaTutus
        </p>
      </div>
    </footer>
  );
}
