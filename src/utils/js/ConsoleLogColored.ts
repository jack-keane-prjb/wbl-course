export enum EConsoleLogTheme {
    purple = 'background-color: #7C61AA; color: white',
    green = 'background-color: green; color: white',
}

interface IConsoleLogColoredObj {
    data: any;
    msg?: string;
    backgroundColor?: string;
    color?: string;
    style?: string | EConsoleLogTheme;
    theme?: EConsoleLogTheme;
}

// obj variant

// export function consoleLogColored({
//     data,
//     msg = 'Custom console.log:',
//     backgroundColor,
//     color,
//     style,
//     theme = EConsoleLogTheme.purple,
// }: IConsoleLogColoredObj): void {

//     console.log(`%c${msg}`, `${theme}`, data
//     )
// }

export function consoleLogColored(
    data: any,
    msg: string = 'Custom console.log:',
    backgroundColor: string = 'black',
    color: string = 'white',
    style: string = 'background-color: black; color: white',
    theme = EConsoleLogTheme.purple,
): void {

    console.log(`%c${msg}`, `${theme}`, data
    )
}

  // ===============================