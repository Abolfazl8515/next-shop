import Image from "next/image";

function CoverImage({ imageLink, title, priority = false }) {
  return (
    <div className="aspect-video relative overflow-hidden mb-6 rounded-md">
      <Image
        src={`http://localhost:5000/${imageLink}`}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center rounded-md hover:scale-110 transition-all duration-300 ease-out"
        quality={80}
        priority={priority}
      />
    </div>
  );
}

export default CoverImage;
