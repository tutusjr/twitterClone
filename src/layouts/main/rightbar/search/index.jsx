import { useRef } from "react";
import { useState } from "react";
import { useClickAway } from "react-use";

export default function Search() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const ref = useRef();

  useClickAway(ref, () => {
    setFocus(false)
  });

  return (
      <div
    ref={ref}
    className="min-h-[32px] h-[53px] mb-3 flex items-center bg-[color:var(--background-primary)] sticky top-0 z-10"
    >
      <label className=" group h-[43px] rounded-full bg-[color:var(--background-third)] border border-transparent relative w-full focus-within:bg-[color:var(--background-primary)] focus-within:border-[#1d9bf0] cursor-text label">
        <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0">
          <svg
            viewBox="0 0 24 24"
            height={18.75}
            className="text-[color:var(--color-base-secondary)] min-w-[32px] absolute group-focus-within:text-[color:var(--color-primary)] cursor-default"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Ara"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
          className="w-full h-full bg-transparent outline-none rounded-full pl-[56px] text-[15px]"
        />
        {(query && focus) && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="w-[22px] h-[22px] rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-black min-w-[22px] right-3 absolute top-1/2 -translate-y-1/2 invisible group-focus-within:visible"
          >
            <svg viewBox="0 0 15 15" width={10} height={10}>
              <path
                fill="currentColor"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              />
            </svg>
          </button>
        )}
      </label>
      {focus && (
        <div className="absolute w-[350px] top-full -translate-y-1 rounded-lg bg-[color:var(--background-primary)] shadow-box max-h-[calc(80vh - 53px)] text-center min-h-[100px]">
          <p className="py-3 pb-8 text-[color:var(--color-base-secondary)] leading-5 w-full">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
          </p>
        </div>
      )}
    </div>
  );
}
