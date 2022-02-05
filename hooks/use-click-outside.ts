import { useCallback, useEffect, useRef } from "react";

const useClickOutside = (onClose: () => void) => {
    const ref = useRef(null);

    useEffect(() => {
        onClose();
    }, []);

    const escapeListener = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    const clickListener = useCallback(
        (e: MouseEvent) => {
            if (!ref.current) {
                return;
            }

            if (!(ref.current! as any).contains(e.target)) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener("click", clickListener);
        document.addEventListener("keyup", escapeListener);

        return () => {
            document.removeEventListener("click", clickListener);
            document.removeEventListener("keyup", escapeListener);
        };
    }, [clickListener, escapeListener]);

    return ref;
};

export default useClickOutside;
