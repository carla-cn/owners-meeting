import { useState } from "react";
import yayJpg from "/public/imgs/yay.jpg";
import { Button } from "antd-mobile";
import "@/styles/index.scss";
import { primaryColor } from "@/constants/color";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button color='primary'>antd-mobile</Button>
      <h2 style={{ color: primaryColor }} className='a'>
        Yay! Welcome to umi!
      </h2>
      <p>
        <img src={yayJpg} width='388' />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
