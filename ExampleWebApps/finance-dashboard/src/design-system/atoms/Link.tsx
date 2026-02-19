import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    /**
     * Optional variant to toggle CSS class names (e.g. "primary", "muted").
     * Will add a class like `link--{variant}` in addition to the base `link` class.
     */
    variant?: string;
};

/**
 * Link component: no inline styling; supports class variability via `variant`
 * and merges any provided `className`.
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    const { target, rel, className, children, ...rest } = props;

    // If opening in a new tab, default to safe rel unless explicitly provided
    const finalRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel;

    const classes = [
        "link",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <a ref={ref} target={target} rel={finalRel} className={classes} {...rest}>
            {children}
        </a>
    );
});

Link.displayName = "Link";

export default Link;