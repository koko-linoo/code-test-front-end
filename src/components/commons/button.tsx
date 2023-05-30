import blueArrowImage from '@assets/images/btn-arrow-blue.png'
import whiteArrowImage from '@assets/images/btn-arrow-white.png'
import './styles.css';


export interface BtnProps {
    type: "white" | "red";
    label: string;
    onClick?: () => void;
}

export default function CustomButton({ onClick, type = "white", label }: BtnProps) {

    const mainCss = " rounded-full space-x-2 shadow text-sm flex items-center py-2 px-6 ";
    const redButton = " bg-red-500 text-white active:bg-red-600 active:shadow-red-600 " + mainCss;
    const whiteButton = " white-btn bg-white active:bg-slate-200 active:shadow-slate-200" + mainCss;

    return (
        <button onClick={onClick} className={type == "red" ? redButton : whiteButton}>
            <span>
                {label}
            </span>
            <img className='w-4' src={type == "red" ? whiteArrowImage : blueArrowImage} />
        </button>
    )
}