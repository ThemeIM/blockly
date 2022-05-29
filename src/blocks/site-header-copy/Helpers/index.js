export function snake_ify(str) {
    return encodeURIComponent(
        String(str)
            .trim()
            .toLocaleLowerCase()
            .replaceAll(' ', '_')
    )
}
