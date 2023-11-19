import "./../styles/customButtons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    text: string
    href: string
    blank: boolean | null
    icon: any
}

const CustomButton = (props: Props) => {
    return (
        <div className="custom-button">
            <a href={props.href}
                target={props.blank ? "_blank" : ""}
                title={props.text}
                rel={props.blank ? "noreferrer" : ""}>
                <span className="text">{props.text}</span>
                <span className="icon">
                    {props.icon ? <FontAwesomeIcon icon={props.icon} /> : <></>}
                </span>
            </a>
        </div>
    )
}

CustomButton.defaultProps = {
    text: "Custom Button",
    href: "#",
    icon: null,
    blank: false
}

export default CustomButton