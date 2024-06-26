import color1 from "@/style/color1.module.css";
import color2 from "@/style/color2.module.css";

export default function Color(){
    return (
        <div>
            <div className={color1.main}>Hello World</div>
            <div className={color2.main}>Hello World</div>
            <div>Hello World</div>
        </div>
    )
}