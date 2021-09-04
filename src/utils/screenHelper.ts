export const isInViewPort = (element: HTMLElement | null | undefined) => {
    // debugger;
    if (!element) {
        return;
    }
    const screen = element.getBoundingClientRect();

    const isInScreen =
        screen.top >= 0 &&
        screen.left >= 0 &&
        screen.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        screen.right <= (window.innerWidth || document.documentElement.clientWidth);

    return isInScreen;
};

export default {
    isInViewPort,
};
