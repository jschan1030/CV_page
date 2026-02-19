// Helper function to get a CSS variable value
const getCSSVariable = (variable: string): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

// Dynamically fetch colors from CSS variables when accessed
export const colors = {
    get background() {
        return getCSSVariable('--color-background'); // soft light blue
    },
    get backgroundContainer() {
        return getCSSVariable('--color-background-container'); // light gray for containers
    },
    get white() {
        return getCSSVariable('--color-white'); // pure white
    },
    get surface() {
        return getCSSVariable('--color-surface'); // white cards
    },
    get primary() {
        return getCSSVariable('--color-primary'); // lavender-purple
    },
    get danger() {
        return getCSSVariable('--color-danger'); // danger red
    },
    get text() {
        return getCSSVariable('--color-text'); // default text
    },
    get accentRed() {
        return getCSSVariable('--color-accent-red'); // classic bright red
    },
    get accentGold() {
        return getCSSVariable('--color-accent-warm'); // warm gold highlight
    },
    get accentBrown() {
        return getCSSVariable('--color-accent-brown'); // grounded deep brown
    },
    get muted() {
        return getCSSVariable('--color-muted'); // muted gray
    },
};
