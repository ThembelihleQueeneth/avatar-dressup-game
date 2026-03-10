// Define the types for the props

type AvatarProps = {
  body: string
  hair: string
  shoes: string
  accessory: string
}

export default function Avatar({
  body,
  hair,
  shoes,
  accessory,
}: AvatarProps) {

  return (

    /*
    relative container
    all images stack using absolute positioning
    */

     <div
      className="relative w-[300px] h-[600px] bg-cover bg-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('/assets/background/room.png')",
      }}
    >

      {/* BODY */}
      <img
        src={`/assets/body/${body}`}
        className="absolute top-0 left-0 w-full"
        alt="body"
      />

      {/* SHOES */}
      <img
        src={`/assets/shoes/${shoes}`}
        className="absolute top-0 left-0 w-20 h-20"
        alt="shoes"
      />

      {/* HAIR */}
      <img
        src={`/assets/hair/${hair}`}
        className="absolute bottom-124 left-28 w-20 h-30"
        alt="hair"
      />

      {/* ACCESSORIES */}
      <img
        src={`/assets/accessories/${accessory}`}
        className="absolute top-20 left-33 w-10 h-10"
        alt="accessory"
      />

    </div>
  )
}