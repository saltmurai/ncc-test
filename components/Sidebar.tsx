import clsx from "clsx";
import { useRouter } from "next/router";

export type ItemProp = {
  name: string;
  path?: string;
};

type SidebarItems = {
  items: ItemProp[];
};

export default function Sidebar({ items }: SidebarItems) {
  const router = useRouter();
  return (
    <>
      <div className="bg-black w-1/6 text-nccGrayText divide-y-2 divide-nccGray">
        {items.map((item: ItemProp) => (
          <div
            className={clsx(
              "bg-black p-2 pl-4 hover:bg-nccGray hover:text-white",
              item.path === router.asPath && "text-white"
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
