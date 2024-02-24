export default function FormatUpdateDescription(desc: string) {
    return desc ? desc.replace(/~/g, '\n') : ''
}