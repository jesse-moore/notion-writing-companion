export default (pathname: string): string => {
    const lastIndex = pathname.lastIndexOf('-')
    return pathname.slice(lastIndex + 1)
}
