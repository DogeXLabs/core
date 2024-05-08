import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/logo.svg"
        alt="Mailgo logo"
        {...props}
        width={180}
        height={30}
        priority
    />
)
export default Brand