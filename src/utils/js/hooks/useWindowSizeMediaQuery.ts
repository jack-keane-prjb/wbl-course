import { useEffect, useState } from "react";

export default function useWindowSizeMediaQuery(ruleStr: string) {
    const [isWinSize, setIsWinSize] = useState(false);

    useEffect(() => {
        const rule = window.matchMedia(ruleStr);
        // TODO: any
        function actionsOnRule(event: any) {
            event.matches ? setIsWinSize(true) : setIsWinSize(false);
        }
        rule.addEventListener('change', actionsOnRule);

        // REC: запускаю один раз сразу. Это нужно для корректного срабатывания сразу на 320пкс.
        actionsOnRule(rule);

        return () => {
            rule.removeEventListener('change', actionsOnRule);
        };
    }, []);

    return isWinSize
}