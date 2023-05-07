import Image from "next/image";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import clsx from "clsx";
import Box, { BoxProps } from "@/components/Box";
import SideBar, { ItemProp } from "@/components/Sidebar";
const Items: Array<ItemProp> = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/service",
  },
  {
    name: "News",
    path: "/service",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Boxes: Array<BoxProps> = [
  {
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    imagePath: "/icon-1.png",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    imagePath: "/icon-2.png",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    imagePath: "/icon-3.png",
  },
];
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBar items={Items} />
        <div className="flex flex-col items-center h-full w-full text-black bg-white py-3 gap-6">
          <div>
            <Image
              src="/ncclogo.png"
              width={310}
              height={122}
              alt="ncc-logo"
            ></Image>
          </div>
          <div className="text-center bg-nccParagraph p-6 w-5/6 px-2">
            <span className="font-bold ">Lorem ipsum dolor sit asmet?</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
          <div className="flex-1 flex w-5/6 h-full justify-between gap-6">
            {Boxes.map((box) => (
              <Box
                title={box.title}
                content={box.content}
                imagePath={box.imagePath}
              />
            ))}
          </div>
          <footer className="w-full h-12 border-t-2 flex items-center p-4 text-nccGrayText">
            Copyright &#169; 2021
          </footer>
        </div>
      </div>
    </>
  );
}
