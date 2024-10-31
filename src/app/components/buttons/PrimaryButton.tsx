'use client'

interface IProps {
    text: string;
    className?: string;
}

export default function PrimaryButton(props: IProps) {
    const { text, className } = props;

    return (
        <button
            className={`px-4 py-2 mx-4 bg-MintGreen text-white rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out ${className}`}
        >
            {text}
        </button>
    );
}
