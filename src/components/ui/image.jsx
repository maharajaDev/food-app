export default function ImageComponent({
    src,
    alt,
    dynamicClass,
}) {
    return (
        <img
            src={`/images/${src}`}
            alt={alt ? alt : "images"}
            className={`${dynamicClass && dynamicClass}`}
        />
    );
}
