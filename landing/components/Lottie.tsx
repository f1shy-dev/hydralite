import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({
    lotti,
    width,
    height,
    className,
}: {
    lotti: any;
    width: number;
    height: number;
    className?: string;
}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lotti,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className={className}>
            <Lottie options={defaultOptions} height={height} width={width} />
        </div>
    );
}
