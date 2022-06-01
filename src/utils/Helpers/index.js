export const snake_ify = (str) =>
    encodeURIComponent(
        String(str).trim().toLocaleLowerCase().replaceAll(" ", "_")
    );
