import { Popover, Disclosure } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function More() {
  return (
    <Popover className="relative">
      <Popover.Button className="py-[3px] block group outline-none">
        <div className="p-3 inline-flex transition-colors rounded-full items-center gap-5 group-hover:bg-[#eff3f41a]">
          <div className="w-[26.25] h-[26.25] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25} fill="#fff">
              <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
            </svg>
          </div>
          <div className="pr-3.5 text-xl">Daha fazla</div>
        </div>
      </Popover.Button>

      <Popover.Panel className="w-[318px] absolute rounded-xl bottom-0 left-0 bg-black shadow-box overflow-hidden">
        <button className="px-4 h-14 w-full  flex transition-colors  items-center gap-5 hover:bg-[#eff3f41a]">
          <div className="w-[26.25] h-[26.25] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25} fill="#fff">
              <path d="M 12 3.786 c -4.556 0 -8.25 3.694 -8.25 8.25 s 3.694 8.25 8.25 8.25 c 1.595 0 3.081 -0.451 4.341 -1.233 l 1.054 1.7 c -1.568 0.972 -3.418 1.534 -5.395 1.534 c -5.661 0 -10.25 -4.589 -10.25 -10.25 S 6.339 1.786 12 1.786 s 10.25 4.589 10.25 10.25 c 0 0.901 -0.21 1.77 -0.452 2.477 c -0.592 1.731 -2.343 2.477 -3.917 2.334 c -1.242 -0.113 -2.307 -0.74 -3.013 -1.647 c -0.961 1.253 -2.45 2.011 -4.092 1.78 c -2.581 -0.363 -4.127 -2.971 -3.76 -5.578 c 0.366 -2.606 2.571 -4.688 5.152 -4.325 c 1.019 0.143 1.877 0.637 2.519 1.342 l 1.803 0.258 l -0.507 3.549 c -0.187 1.31 0.761 2.509 2.079 2.629 c 0.915 0.083 1.627 -0.356 1.843 -0.99 c 0.2 -0.585 0.345 -1.224 0.345 -1.83 c 0 -4.556 -3.694 -8.25 -8.25 -8.25 Z m -0.111 5.274 c -1.247 -0.175 -2.645 0.854 -2.893 2.623 c -0.249 1.769 0.811 3.143 2.058 3.319 c 1.247 0.175 2.645 -0.854 2.893 -2.623 c 0.249 -1.769 -0.811 -3.144 -2.058 -3.319 Z" />
            </svg>
          </div>
          <div className="pr-3.5 text-xl font-bold">Bağlan</div>
        </button>

        <button className=" border-b-gray-700 px-4 h-14 w-full  flex transition-colors  items-center gap-5 hover:bg-[#eff3f41a]">
          <div className="w-[26.25] h-[26.25] relative">
            <svg viewBox="0 0 24 24" width={26.25} height={26.25} fill="#fff">
              <path d="M 23 3 v 14 h -2 V 5 H 5 V 3 h 18 Z M 10 17 c 1.1 0 2 -1.34 2 -3 s -0.9 -3 -2 -3 s -2 1.34 -2 3 s 0.9 3 2 3 Z M 1 7 h 18 v 14 H 1 V 7 Z m 16 10 c -1.1 0 -2 0.9 -2 2 h 2 v -2 Z m -2 -8 c 0 1.1 0.9 2 2 2 V 9 h -2 Z M 3 11 c 1.1 0 2 -0.9 2 -2 H 3 v 2 Z m 0 4 c 2.21 0 4 1.79 4 4 h 6 c 0 -2.21 1.79 -4 4 -4 v -2 c -2.21 0 -4 -1.79 -4 -4 H 7 c 0 2.21 -1.79 4 -4 4 v 2 Z m 0 4 h 2 c 0 -1.1 -0.9 -2 -2 -2 v 2 Z" />
            </svg>
          </div>
          <div className="pr-3.5 text-xl font-bold">Para kazanma</div>
        </button>

          <div className="w-[89%] h-px mx-auto my-0.5 bg-[#2f3336]"/>

        <Disclosure>
        {({open}) => (
          <>
          <Disclosure.Button className="h-[52px] flex justify-between w-full items-center px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
            İçerik Üreticisi Stüdyosu
            <svg className={classNames("transition-all", {
              "rotate-[-180deg]": open
            })} viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
              
                fill={open ? "#1d9bf0" : "#fff"}
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-[#e7e9ea] hover:bg-[#eff3f41a]">
          <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium">
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path fill="#fff" d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/></svg>
            İstatistikler
            </Link>
          </Disclosure.Panel>
        </>
        )}
        </Disclosure>
        <Disclosure>
          {({open}) => (
            <>
            <Disclosure.Button className="h-[52px] flex justify-between w-full items-center px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
            Profesyonel Araçlar
            <svg className={classNames("transition-all", {
              "rotate-[-180deg]": open
            })}  viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill={open ? "#1d9bf0" : "#fff"}
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-[#e7e9ea] hover:bg-[#eff3f41a]">
          <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium">
          <svg  viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path fill="#fff" d="M 1.996 5.5 c 0 -1.38 1.119 -2.5 2.5 -2.5 h 15 c 1.38 0 2.5 1.12 2.5 2.5 v 13 c 0 1.38 -1.12 2.5 -2.5 2.5 h -15 c -1.381 0 -2.5 -1.12 -2.5 -2.5 v -13 Z m 2.5 -0.5 c -0.277 0 -0.5 0.22 -0.5 0.5 v 13 c 0 0.28 0.223 0.5 0.5 0.5 h 15 c 0.276 0 0.5 -0.22 0.5 -0.5 v -13 c 0 -0.28 -0.224 -0.5 -0.5 -0.5 h -15 Z m 8.085 5 H 8.996 V 8 h 7 v 7 h -2 v -3.59 l -5.293 5.3 l -1.415 -1.42 L 12.581 10 Z"/></svg>
            Reklamlar
            </Link>
          </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({open}) => (
            <>
            <Disclosure.Button className="h-[52px] flex justify-between w-full items-center px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
            Ayarlar ve Destek
            <svg className={classNames("transition-all", {
              "rotate-[-180deg]": open
            })} viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill={open ? "#1d9bf0" : "#fff"}
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-[#e7e9ea] hover:bg-[#eff3f41a]">
          <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium">
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path fill="#fff" d="M 10.54 1.75 h 2.92 l 1.57 2.36 c 0.11 0.17 0.32 0.25 0.53 0.21 l 2.53 -0.59 l 2.17 2.17 l -0.58 2.54 c -0.05 0.2 0.04 0.41 0.21 0.53 l 2.36 1.57 v 2.92 l -2.36 1.57 c -0.17 0.12 -0.26 0.33 -0.21 0.53 l 0.58 2.54 l -2.17 2.17 l -2.53 -0.59 c -0.21 -0.04 -0.42 0.04 -0.53 0.21 l -1.57 2.36 h -2.92 l -1.58 -2.36 c -0.11 -0.17 -0.32 -0.25 -0.52 -0.21 l -2.54 0.59 l -2.17 -2.17 l 0.58 -2.54 c 0.05 -0.2 -0.03 -0.41 -0.21 -0.53 l -2.35 -1.57 v -2.92 L 4.1 8.97 c 0.18 -0.12 0.26 -0.33 0.21 -0.53 L 3.73 5.9 L 5.9 3.73 l 2.54 0.59 c 0.2 0.04 0.41 -0.04 0.52 -0.21 l 1.58 -2.36 Z m 1.07 2 l -0.98 1.47 C 10.05 6.08 9 6.5 7.99 6.27 l -1.46 -0.34 l -0.6 0.6 l 0.33 1.46 c 0.24 1.01 -0.18 2.07 -1.05 2.64 l -1.46 0.98 v 0.78 l 1.46 0.98 c 0.87 0.57 1.29 1.63 1.05 2.64 l -0.33 1.46 l 0.6 0.6 l 1.46 -0.34 c 1.01 -0.23 2.06 0.19 2.64 1.05 l 0.98 1.47 h 0.78 l 0.97 -1.47 c 0.58 -0.86 1.63 -1.28 2.65 -1.05 l 1.45 0.34 l 0.61 -0.6 l -0.34 -1.46 c -0.23 -1.01 0.18 -2.07 1.05 -2.64 l 1.47 -0.98 v -0.78 l -1.47 -0.98 c -0.87 -0.57 -1.28 -1.63 -1.05 -2.64 l 0.34 -1.46 l -0.61 -0.6 l -1.45 0.34 c -1.02 0.23 -2.07 -0.19 -2.65 -1.05 l -0.97 -1.47 h -0.78 Z M 12 10.5 c -0.83 0 -1.5 0.67 -1.5 1.5 s 0.67 1.5 1.5 1.5 c 0.82 0 1.5 -0.67 1.5 -1.5 s -0.68 -1.5 -1.5 -1.5 Z M 8.5 12 c 0 -1.93 1.56 -3.5 3.5 -3.5 c 1.93 0 3.5 1.57 3.5 3.5 s -1.57 3.5 -3.5 3.5 c -1.94 0 -3.5 -1.57 -3.5 -3.5 Z"/></svg>
            Ayarlar ve gizlilik
            </Link>
          </Disclosure.Panel>
          <Disclosure.Panel className="text-[#e7e9ea] hover:bg-[#eff3f41a]">
          <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium">
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path fill="#fff" d="M 11.57 11.96 l 0.99 -0.79 c 0.33 -0.26 0.56 -0.53 0.7 -0.8 c 0.15 -0.27 0.22 -0.57 0.22 -0.91 c 0 -0.41 -0.12 -0.74 -0.38 -0.97 s -0.62 -0.35 -1.09 -0.35 s -0.85 0.12 -1.13 0.37 c -0.26 0.25 -0.4 0.59 -0.4 1.03 c 0 0.2 0.03 0.42 0.08 0.65 l -2.07 -0.15 c -0.06 -0.29 -0.09 -0.55 -0.09 -0.79 c 0 -0.84 0.33 -1.51 0.98 -2.01 c 0.67 -0.49 1.55 -0.74 2.66 -0.74 c 1.17 0 2.07 0.24 2.71 0.73 c 0.63 0.48 0.95 1.16 0.95 2.04 c 0 0.98 -0.47 1.86 -1.4 2.65 l -0.87 0.73 c -0.17 0.15 -0.29 0.28 -0.36 0.4 c -0.06 0.11 -0.09 0.26 -0.09 0.45 v 0.46 h -2.1 v -0.67 c 0 -0.3 0.06 -0.55 0.17 -0.75 c 0.12 -0.2 0.29 -0.39 0.52 -0.58 Z m -0.52 5.17 c 0.24 0.25 0.56 0.37 0.93 0.37 c 0.39 0 0.7 -0.12 0.94 -0.37 c 0.25 -0.25 0.37 -0.56 0.37 -0.94 c 0 -0.39 -0.12 -0.7 -0.37 -0.95 c -0.24 -0.25 -0.55 -0.37 -0.94 -0.37 c -0.37 0 -0.69 0.12 -0.93 0.37 s -0.36 0.56 -0.36 0.95 c 0 0.38 0.12 0.69 0.36 0.94 Z M 22.25 12 c 0 5.66 -4.59 10.25 -10.25 10.25 S 1.75 17.66 1.75 12 S 6.34 1.75 12 1.75 S 22.25 6.34 22.25 12 Z M 12 20.25 c 4.56 0 8.25 -3.69 8.25 -8.25 S 16.56 3.75 12 3.75 S 3.75 7.44 3.75 12 s 3.69 8.25 8.25 8.25 Z"/></svg>
            Yardım merkezi
            </Link>
          </Disclosure.Panel>
          <Disclosure.Panel className="text-[#e7e9ea] hover:bg-[#eff3f41a]">
          <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium">
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path fill="#fff" d="M 20 12 h 2 v 6.5 c 0 1.38 -1.12 2.5 -2.5 2.5 h -15 C 3.12 21 2 19.88 2 18.5 v -13 C 2 4.12 3.12 3 4.5 3 H 11 v 2 H 4.5 c -0.28 0 -0.5 0.22 -0.5 0.5 v 13 c 0 0.28 0.22 0.5 0.5 0.5 h 15 c 0.27 0 0.5 -0.22 0.5 -0.5 V 12 Z m 2.31 -6.78 l -6.33 7.18 c -0.2 2.02 -1.91 3.6 -3.98 3.6 H 8 v -4 c 0 -2.07 1.58 -3.78 3.6 -3.98 l 7.18 -6.33 c 0.99 -0.88 2.49 -0.83 3.43 0.1 c 0.93 0.94 0.98 2.44 0.1 3.43 Z m -1.52 -2.01 c -0.19 -0.19 -0.49 -0.2 -0.69 -0.02 l -6.08 5.36 c 0.59 0.35 1.08 0.84 1.43 1.43 l 5.36 -6.08 c 0.18 -0.2 0.17 -0.5 -0.02 -0.69 Z"/></svg>
            Görünüm
            </Link>
          </Disclosure.Panel>
          <Disclosure.Panel className="text-[#e7e9ea] hover:bg-[#eff3f41a]">
          <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium">
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path fill="#fff" d="M 11.999 22.25 c -5.652 0 -10.25 -4.598 -10.25 -10.25 S 6.347 1.75 11.999 1.75 S 22.249 6.348 22.249 12 s -4.598 10.25 -10.25 10.25 Z m 0 -18.5 c -4.549 0 -8.25 3.701 -8.25 8.25 s 3.701 8.25 8.25 8.25 s 8.25 -3.701 8.25 -8.25 s -3.701 -8.25 -8.25 -8.25 Z m 0.445 6.992 c 1.747 -0.096 3.748 -0.689 3.768 -0.695 l 0.575 1.916 c -0.077 0.022 -1.616 0.48 -3.288 0.689 v 0.498 c 0.287 1.227 1.687 2.866 2.214 3.405 l -1.428 1.4 c -0.188 -0.191 -1.518 -1.576 -2.286 -3.144 c -0.769 1.568 -2.098 2.952 -2.286 3.144 l -1.428 -1.4 c 0.527 -0.54 1.927 -2.178 2.214 -3.405 v -0.498 c -1.672 -0.209 -3.211 -0.667 -3.288 -0.689 l 0.575 -1.916 c 0.02 0.006 2.021 0.6 3.768 0.695 m 0 0 c 0.301 0.017 0.59 0.017 0.891 0 M 12 6.25 c -0.967 0 -1.75 0.78 -1.75 1.75 s 0.783 1.75 1.75 1.75 s 1.75 -0.78 1.75 -1.75 s -0.784 -1.75 -1.75 -1.75 Z"/></svg>
            Klavye kısayolları
            </Link>
          </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
}
