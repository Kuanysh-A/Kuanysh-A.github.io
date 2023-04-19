import "./App.css";
import { Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import NavButton from "./components/NavButton";
import Slider from "./components/Slider";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { Main } from "./pages/Main";
import { Exp } from "./pages/Exp";
import { Onthewaytocase } from "./pages/Onthewaytocase";
import { Case } from "./pages/Case";
import { Range } from "./components/Range";
import { PlayButton } from "./components/PlayButton";
import { Avatar } from "./components/Avatar";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Checkbox from "./components/Checkbox";
import { ShowcasePic } from "./components/ShowcasePic";
import { CiPlay1 } from "react-icons/ci";
import { BsFillPlayFill } from "react-icons/bs";
import { CheckButton } from "./components/CheckButton";
import { VerticalNav } from "./components/VerticalNav";
import Preloader from "./pages/Preloader";
import { Gpark } from "./pages/Gpark";
import { Jetisu } from "./pages/Jetisu";
import { Team } from "./pages/Team";
import Footer from "./components/Footer";
import Calculator from "./pages/Calculator";
import { Offers } from "./pages/Offers";
import { Marketing } from "./pages/Marketing";
import Forma from "./pages/Forma";

const MainPage = () => {
  const [value, setValue] = useState(0);
  return (
    // <div className="ml-10 w-full justify-center items-center gap-2">
    //   <Avatar img="https://i.pinimg.com/736x/9f/d3/e2/9fd3e2e5c4e91b445e6e441f5f2b9c57.jpg" />
    //   <Avatar ratio="medium" />
    //   <Button className=" bg-primary text-white flex font-inter">
    //     Позвоните мне
    //   </Button>
    //   <Button className=" bg-primary text-white flex font-inter">
    //     Позвоните мне&nbsp;&nbsp;&nbsp;
    //     <FaCheck />
    //   </Button>
    //   <Button className=" bg-primary text-white flex font-inter">
    //     Позвоните мне&nbsp;&nbsp;&nbsp;
    //     <RxCross1 color="red" />
    //   </Button>
    //   <Button className=" bg-primary text-white flex px-24">
    //     <BsTelephone />
    //   </Button>
    //   <Button className="bg-primary text-white font-inter">
    //     Рассчитать стоимость
    //   </Button>
    //   <Button className="bg-primary text-white font-inter">
    //     Рассчитать стоимость
    //   </Button>
    //   <Button className=" text-primary">заказать звонок</Button>
    //   <Button className="font-inter font-light text-primary border-primary border hover:bg-primary hover:text-white">
    //     Получить консультацию
    //   </Button>
    //   <Button className=" bg-primary text-white">заказать звонок</Button>
    //   <Slider value={20} />
    //   <Slider onChange={(e) => setValue(e.target.value)} value={value} />
    //   <NavButton>
    //     <AiOutlineArrowLeft className="w-5 h-5" />
    //   </NavButton>
    //   <Checkbox label="Воронка продаж" />
    //   <Card className="w-64 h-32 relative">
    //     <div>
    //       <h2 className="text-4xl font-medium">G-park</h2>
    //       <p className="text-xl font-light font-inter">SMM</p>
    //     </div>
    //     <div className="absolute -right-4">
    //       <NavButton>
    //         <AiOutlineArrowLeft className="w-5 h-5" />
    //       </NavButton>
    //     </div>
    //   </Card>
    //   <ShowcasePic />
    //   <PlayButton className="w-20 h-20">
    //     <CiPlay1 className={`relative w-9 h-9`} color="#717171" />
    //     <BsFillPlayFill className="absolute w-7 h-7" />
    //   </PlayButton>
    //   <PlayButton className="w-16 h-16">
    //     <CiPlay1 className={`relative w-7 h-7`} color="#717171" />
    //     <BsFillPlayFill className="absolute w-5 h-5" />
    //   </PlayButton>
    //   <CheckButton>Больше примеров</CheckButton>
    //   <VerticalNav></VerticalNav>

    //   <Navbar
    //     button={
    //       <Button className="rounded-md text-primary border-primary border hover:bg-primary hover:text-white font-inter non-italic font-light text-sm leading-2.9 pl-3.5 pr-3.5 pt-2.5 pb-2.5">
    //         Получить консультацию
    //       </Button>
    //     }
    //   />
    //   <Form
    //     className="pl-md pt-mdm pr-xl pb-sm font-medium placeholder:text-5 placeholder:leading-6 placeholder-opacity-10 placeholder:text-grayForm non-italic"
    //     placeholder="Введите ваше имя"
    //   />
    //   <Form
    //     className="pl-md pt-mdm pr-xl pb-sm font-medium placeholder:text-5 placeholder:leading-6 placeholder-opacity-30 placeholder:text-darkGray non-italic"
    //     placeholder="Введите ваше имя"
    //   />
    //   <Form
    //     className="pl-md pt-mdm pr-xl pb-sm font-medium placeholder:text-5 placeholder:leading-6 placeholder-opacity-50 placeholder:text-orange non-italic border border-solid border-orange border-opacity-30"
    //     placeholder="Введите ваше имя"
    //   />
    //   <Form
    //     className="pl-md pt-mdm pr-xl pb-sm font-medium placeholder:text-5 placeholder:leading-6 placeholder-opacity-30 placeholder:text-darkGray non-italic"
    //     placeholder="Дани |  "
    //   />
    //   <Range />
    // </div>
    <div>
      {/* <Preloader />  */}
      <Main className="relative">
        <Navbar
          className="absolute bg-white fixed-navbar"
          button={
            <Button className="rounded-md text-primary border-primary border hover:bg-primary hover:text-white font-inter non-italic font-light text-sm leading-2.9 pl-3.5 pr-3.5 pt-2.5 pb-2.5">
              Получить консультацию
            </Button>
          }
        />
      </Main>
      <Onthewaytocase className="relative"></Onthewaytocase>
      <Case />
      <Exp />
      <Offers />
      <Calculator />
      <Team />
      <Forma />
      {/* <Marketing>
        <Navbar
          className="z-50 absolute bg-white"
          button={
            <Button className="rounded-md text-primary border-primary border hover:bg-primary hover:text-white font-inter non-italic font-light text-sm leading-2.9 pl-3.5 pr-3.5 pt-2.5 pb-2.5">
              Получить консультацию
            </Button>
          }
        />
      </Marketing> */}
    </div>
  );
};

//68*4

export default MainPage;
