import { useCallback, useState, Ref } from "react";

const useOnScreen = ({
    root = null,
    rootMargin = "0px",
    threshold = 0,
} = {}) => {
    const [observer, setOserver] = useState<IntersectionObserver | undefined>();
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    const measureRef: Ref<any> = useCallback(
        (node: any) => {
            if (node) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        setIntersecting(entry.isIntersecting);
                    },
                    { root, rootMargin, threshold }
                );

                observer.observe(node);
                setOserver(observer);
            }
        },
        [root, rootMargin, threshold]
    );

    return { measureRef, isIntersecting, observer };
};

export default useOnScreen;
