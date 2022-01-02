declare module '*.css' {
    interface ClassNames {
        [className: string]: string
    }
    const classNames: ClassNames;
    export = classNames;
}

declare module '*.scss' {
    interface ClassNames {
        [className: string]: string
    }
    const classNames: ClassNames;
    export = classNames;
}

declare module '*.jpeg';