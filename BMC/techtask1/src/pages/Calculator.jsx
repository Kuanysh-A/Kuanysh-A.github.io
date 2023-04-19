import React from "react";
import { BiPhoneCall } from "react-icons/bi";

import Rounded from "../assets/calcRounded.svg";
import Button from "../components/Button";
import Billet from "../components/Billet";
import Slider from "../components/Slider";

const Calculator = () => {
  const [price, setPrice] = React.useState(1_000_000);
  const [smmPrice, setSmmPrice] = React.useState(0);

  let formatter = new Intl.NumberFormat("ru");
  return (
    <>
      <div className="h-[2379px] relative w-full bg-black">
        <div className="w-full h-full px-20 pt-32 pb-9">
          <div className="w-full h-full rounded-[32px] bg-white">
            <div className="flex pt-16">
              <img src={Rounded} alt="Рассчитай стоимость" />
              <div className="ml-4">
                <h3 className="text-6xl font-bold">Рассчитай стоимость</h3>
                <div className="font-normal text-gray text-xl mt-1">
                  <p>
                    Чтобы просто проконсультироваться по срокам и деталям вы
                    всегда можете <br /> связаться с менеджерами или написать
                    нам.
                    <Button className="bg-primary bottom-6 -right-[29rem] relative !w-40 text-white !px-2.5 !text-sm !py-0 !rounded">
                      <BiPhoneCall className="mr-2" /> заказать звонок
                    </Button>
                    <span className="bottom-5 relative">
                      Не является публичной офертой.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <Billet
              text="SMM + фото"
              className="w-96 pr-4"
              info="До 5 часов фотосъёмки!"
            />
          </div>
        </div>
        <div className="absolute z-10 top-80 grid grid-cols-2 w-full h-64">
          <div>
            <div className="mt-40 ml-36 z-50">
              <div className="text-primary px-3 shadow-md rounded-xl border border-zinc-300 w-44 font-bold text-3xl">
                <h3>28 постов</h3>
              </div>
              <Slider
                className="w-80 mt-7"
                min={0}
                max={35}
                step={5}
                value={smmPrice}
                onChange={(e) => setSmmPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary px-14 pt-6 rounded-l-2xl w-3/4 text-white">
              {/* button */}
              <div className=" flex gap-2.5">
                <div className="border border-opacity-25 h-6 rounded-xl px-3 flex items-center font-light text-sm border-white">
                  SMM
                </div>
                <div className="border border-opacity-25 h-6 rounded-xl px-3 flex items-center font-light text-sm border-white">
                  Реклама
                </div>
                <div className="border border-opacity-25 h-6 rounded-xl px-3 flex items-center font-light text-sm border-white">
                  Маркетинг-сопровождение
                </div>
              </div>
              <div>
                <h3 className="mt-5 text-2xl font-bold text-white text-opacity-70 ">
                  Итого:
                </h3>
                <span className="text-white text-5xl font-bold">
                  {`${formatter.format(price)}`}&#8376;
                </span>
                <Button className="text-primary bg-white !py-1.5 mt-6 !px-3 !text-2xl !font-medium flex items-center justify-center">
                  заказать звонок
                </Button>
                <span className="mt-3 underline text-opacity-60 text-white cursor-pointer">
                  почему так дорого?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
