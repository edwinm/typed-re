// typed-re

interface RegExpMatchResult<T extends string> {
    index?: number
    input?: string
    0: string
    groups: { [G in Groups<T>]: string }
}

type Groups<Re extends string> =
    Re extends `${string}(?<${infer Group}>${string})${infer Rest}`
        ? Group | Groups<Rest>
        : never;

export function match<T extends string>(str: string, re: T, flags?: string): RegExpMatchResult<T> | null {
    return new RegExp(re, flags).exec(str) as unknown as RegExpMatchResult<T> | null;
}

