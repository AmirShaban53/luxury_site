import { ContainerFluid } from "./layout";
import PanImage from "./panImage";

const Features = () => {
  return (
    <div className="bg-neutral-200">
      <ContainerFluid>
        <div className="grid grid-cols-12" id="fashion">
          <div className="col-span-12 md:col-span-6 aspect-square">
            <PanImage src={"/resized/features/mohamad.webp"} />
          </div>
          <div className="col-span-12 md:col-span-6 aspect-square p-8 md:p-28">
            <div className="relative h-full ">
              <div className="absolute text-center left-1/2 -translate-x-1/2 bottom-16 font-semibold ">
                <div className="mb-8">
                  <p>A TIMELESS SWEATER</p>
                  <p>DESIGNED TO ETERNITY</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="underline underline-offset-8"
                  >
                    Shop
                  </button>
                </div>
              </div>
              <div className="">
                <img
                  src="/resized/sweater.webp"
                  className="h-full w-full object-cover mx-auto -"
                  alt="kneated sweater"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12" id="about">
          <div className="col-span-12 md:col-span-6 aspect-square p-8 md:p-20 flex gap-12 flex-col">
            <div className="flex gap-2 grow">
              <div className="basis-1/2">
                <img
                  src="/resized/brooke.webp"
                  className="h-full object-cover mx-auto"
                  alt="man where eyeglasses"
                />
                <p className="font-semibold tracking-tight text-sm text-neutral-500">
                  Brooke
                </p>
              </div>
              <div className="basis-1/2 ">
                <img
                  src="/resized/black.webp"
                  className="h-full object-cover mx-auto"
                  alt="dark skinned super model"
                />
                <p className="font-semibold tracking-tight text-sm text-neutral-500">
                  Andres
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="uppercase font-semibold text-lg tracking-tight">
                Who are we?
              </p>
              <p className="tracking-tight text-neutral-600">
                B<span className="text-sm">&</span>A [Brooke & Andres] is a
                place for you to explore and discover your style. Find unquie
                clothes and skincare products that you won't find elsewhere.
              </p>
              <div>
                <button
                  type="button"
                  className="underline underline-offset-4 font-semibold"
                >
                  Discover
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 aspect-square relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <p className="uppercase font-semibold text-2xl font-noto tracking-[0.3rem]">
                Brooke <span className="text-base">&</span> Andres
              </p>
            </div>
            <PanImage src={"/resized/features/intro.webp"} />
          </div>
        </div>
        <div className="grid grid-cols-12" id="skin">
          <div className="col-span-12 md:col-span-6 aspect-square ">
            <PanImage src={"/resized/features/skin.webp"} />
          </div>
          <div className="col-span-12 md:col-span-6 aspect-square p-8 md:p-28">
            <div className="relative h-full">
              <div className="absolute  font-semibold text-neutral-50 text-center left-1/2 -translate-x-1/2 bottom-8 space-y-6">
                <div>
                  <p>SKINCARE CREAM</p>
                  <p>DESIGNED TO ETERNITY</p>
                </div>
                <div>
                  <button type="button" className="underline underline-offset-8">Shop</button>
                </div>
              </div>
              <img
                src="/resized/features/skinProduct.webp"
                className="h-full object-cover object-bottom mx-auto"
                alt="skincare product"
              />
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Features;
