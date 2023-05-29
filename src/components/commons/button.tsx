import blueArrowImage from '@assets/images/btn-arrow-blue.png'
import whiteArrowImage from '@assets/images/btn-arrow-white.png'
import './styles.css';


export interface BtnProps {
    type: "white" | "red";
    label: string;
}

export default function CustomButton({ type = "white", label }: BtnProps) {

    const mainCss = "rounded-full space-x-2 text-sm border flex items-center py-2 px-6";
    const redButton = "bg-red-500 text-white " + mainCss;
    const whiteButton = "white-btn bg-white " + mainCss;

    return (
        <button className={type == "red" ? redButton : whiteButton}>
            <span>
                {label}
            </span>
            <img className='w-4' src={type == "red" ? whiteArrowImage : blueArrowImage} />
        </button>
    )
}